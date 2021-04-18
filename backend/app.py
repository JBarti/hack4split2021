import logging
import os

from flask import Flask, jsonify, session, request
from flask_apispec import use_kwargs, marshal_with, doc, FlaskApiSpec

from config import ConfigDev, ConfigProd
from db import db
import models
from schema import (
    orgs,
    campaigns,
)
from glovo_api import GlovoApi
from helpers.auth_helper import verify_password, authorized


app = Flask(__name__, static_url_path="/", static_folder="static")
version = os.environ.get("version")

if version == "production":
    app.config.from_object(ConfigProd)
if version is None:
    app.config.from_object(ConfigDev)

docs = FlaskApiSpec(app)


@app.errorhandler(422)
@app.errorhandler(400)
def handle_error(err):
    print(err)
    headers = err.data.get("headers", None)
    messages = err.data.get("messages", ["Invalid request."])
    if headers:
        return jsonify({"errors": messages}), err.code, headers
    else:
        return jsonify({"errors": messages}), err.code


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/ping")
def ping():
    return jsonify({"pong": True}), 200


@app.route("/api/login", methods=["POST"])
@use_kwargs(models.LoginPostRequest, location="json")
@marshal_with(models.LoginPostResponse)
@doc(description="Auth route", tags=["auth"])
def authenticate_organisation_acc(**kwargs):
    org_acc = orgs.get_organisation_account(kwargs["email"])
    if not org_acc:
        return jsonify({"error": "User not found"}), 404
    if not verify_password(kwargs["password"], org_acc["password"]):
        return jsonify({"error": "Wrong credentials"}), 401

    session["username"] = org_acc["email"]
    print(org_acc)
    return jsonify(models.LoginPostResponse().dumps(org_acc))


@app.route("/api/organisation", methods=["GET"])
@use_kwargs(models.OrganisationGetRequest, location="query")
@marshal_with(models.OrganisationGetResponse)
@doc(description="Get organisation data", tags=["organisation"])
@authorized
def get_organisation(**kwargs):
    organisation = orgs.get_organisation(**kwargs)
    if not organisation:
        return jsonify({
            "error": "Organisation doesn't exist"
        })
    return jsonify(
        models.OrganisationGetResponse().dumps(organisation)
    )


@app.route("/api/organisation/register", methods=["POST"])
@use_kwargs(models.RegisterPostRequest, location="json")
@marshal_with(models.RegisterPostResponse)
@doc(description="Register organisation", tags=["organisation"])
def register_organisation(**kwargs):
    try:
        org_acc, organisation = orgs.create_organisation(**kwargs)
    except TypeError:
        return jsonify({"error": "Email already exists"}), 409

    session["username"] = org_acc["email"]
    return jsonify(
        models.RegisterPostResponse().dumps(org_acc)
    )


@app.route("/api/campaign", methods=["POST"])
@use_kwargs(models.CampaignPostRequest, location="json")
@marshal_with(models.CampaignPostResponse)
@doc(description="Create campaign", tags=["campagin"])
@authorized
def create_campaign(**kwargs):
    goals = kwargs["goals"]
    goals_by_id = {
        goal["id"]: goal
        for goal in goals
    }
    products = GlovoApi(kwargs["lat"], kwargs["long"]).get_products()
    for product in products:
        if not goals_by_id.get(product["id"]):
            continue
        goals_by_id[product["id"]].update(
            {
                "category": product["category"],
                "name": product["name"],
                "image_url": product["image_url"],
                "price": product["price"],
            }
        )
    kwargs["goals"] = list(goals_by_id.values())
    organisation_acc = orgs.get_organisation_account(
        email=session["username"],
    )
    campaign_id, campaign = campaigns.create_campaign(**kwargs)
    orgs.add_campaign(
        organisation_id=organisation_acc["organisation_id"],
        tags=campaign["tags"],
        name=campaign["name"],
        date_from=campaign["date_from"],
        date_to=campaign["date_to"],
        location=campaign["location"],
    )

    return jsonify(
        models.CampaignPostResponse().dump({"campaign_id": campaign_id})
    )


@app.route("/api/products", methods=["GET"])
@use_kwargs(models.ProductsGetRequest, location="query")
@marshal_with(models.ProductsGetResponse)
@doc(description="Get items from glovo api", tags=["glovo api"])
@authorized
def get_products(**kwargs):
    print(kwargs)
    glovo_api = GlovoApi(
        lat=kwargs["lat"],
        lon=kwargs["long"],
    )
    products = glovo_api.get_products()
    return jsonify(
        models.ProductsGetResponse().dump({"products": products})
    )


docs.register_existing_resources()

if __name__ == "__main__":
    app.run(host="0.0.0.0")
