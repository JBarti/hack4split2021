import logging
import os

from flask import Flask, jsonify, session, request
from flask_apispec import use_kwargs, marshal_with, doc, FlaskApiSpec

from config import ConfigDev, ConfigProd
from db import db
import models
from schema import (
    orgs
)
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
    org_acc = orgs.get_organisation_account(**kwargs)
    if not org_acc:
        return jsonify({"error": "User not found"}), 404
    if not verify_password(kwargs["password"], org_acc["password"]):
        return jsonify({"error": "Wrong credentials"}), 401

    session["username"] = org_acc["username"]
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
    org_acc, organisation = orgs.create_organisation(**kwargs)
    if not organisation:
        return {"error": "Username already exists"}
    session["username"] = org_acc["username"]
    return jsonify(
        models.RegisterPostResponse().dumps(org_acc)
    )


docs.register_existing_resources()

if __name__ == "__main__":
    app.run(host="0.0.0.0")
