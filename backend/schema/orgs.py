from google.cloud.firestore import ArrayUnion
from time import time

from helpers.auth_helper import hash_password
from db import db
from schema import slideshows

org_acc_coll = db.collection("organisation_accounts")
org_coll = db.collection("organisation")


def create_organisation(password, email, organisation_name, slideshow_data):
    user_document = org_acc_coll.document(email).get()
    user_exists = user_document.exists

    if user_exists:
        return None

    slideshow_id, slideshow = slideshows.create_slideshow(**slideshow_data)

    organisation = {
        "name": organisation_name,
        "campaigns": {},
        "slideshow_id": slideshow_id,
    }

    organisation_doc = org_coll.document()
    organisation_doc.set(organisation)

    org_acc = {
        "password": hash_password(password),
        "email": email,
        "verified": False,
        "organisation_id": organisation_doc.id,
    }
    org_acc_doc = org_acc_coll.document(email)
    org_acc_doc.set(org_acc)

    return org_acc, organisation


def get_organisation_account(email):
    org_acc = org_acc_coll.document(email).get().to_dict()
    return org_acc


def get_organisation(organisation_id):
    org = org_coll.document(organisation_id).get().to_dict()
    org_campaigns_coll = org_coll.document(organisation_id).collection("campaigns")
    org_campaigns = [
        org_campaign.to_dict()
        for org_campaign in org_campaigns_coll.get()
    ]

    org["campaigns"] = org_campaigns

    return org


def add_campaign(organisation_id, campaign_id, tags, name, date_from, date_to, location):
    campaign = {
        "tags": tags,
        "name": name,
        "date_from": date_from,
        "date_to": date_to,
        "location": location,
        "finished_percent": 0,
    }

    org_campaigns_coll = org_coll.document(organisation_id).collection("campaigns")
    org_campaigns_coll.document(campaign_id).set(campaign)

    return campaign


def update_campaign_progress(organisation_id, campaign_id, finished_percent):
    org_campaigns_coll = org_coll.document(organisation_id).collection("campaigns")
    org_campaigns_coll.document(campaign_id).update({"finished_percent": finished_percent})
