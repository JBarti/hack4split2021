from helpers.auth_helper import hash_password
from db import db

org_acc_coll = db.collection("organisation_accounts")
org_coll = db.collection("organisation")


def create_organisation(username, password, email, organisation_name):
    user_document = org_acc_coll.document(username).get()
    user_exists = user_document.exists

    if user_exists:
        return None

    organisation = {
        "name": organisation_name,
        "campaigns": [],
        "slideshow_id": "",
    }

    organisation_doc = org_coll.document()
    organisation_doc.set(organisation)

    org_acc = {
        "username": username,
        "password": hash_password(password),
        "email": email,
        "verified": False,
        "organisation_id": organisation_doc.id,
    }
    org_acc_doc = org_acc_coll.document(username)
    org_acc_doc.set(org_acc)

    return org_acc, organisation


def get_organisation_account(username, password):
    org_acc = org_acc_coll.document(username).get().to_dict()
    return org_acc


def get_organisation(organisation_id):
    org = org_coll.document(organisation_id).get().to_dict()
    return org
