from db import db
from schema import slideshows, analytics, orgs

campaigns_coll = db.collection("campaigns")


def create_campaign(
    tags,
    name,
    date_from,
    date_to,
    location,
    lat,
    long,
    goals,
    slideshow_data,
    organisation_id,
):
    slideshow_id, slideshow = slideshows.create_slideshow(
        slideshow_data["title"],
        slideshow_data["description"],
        slideshow_data["image_urls"],
    )
    analytics_id, analytic = analytics.create_empty_analytics()
    campaign = {
        "tags": tags,
        "name": name,
        "date_from": date_from,
        "date_to": date_to,
        "location": location,
        "lat": lat,
        "long": long,
        "goals": goals,
        "slideshow_id": slideshow_id,
        "analytics_id": analytics_id,
        "finished_percent": 0,
        "organisation_id": organisation_id,
    }

    campaign_doc = campaigns_coll.document()
    campaign_doc.set(campaign)

    return campaign_doc.id, campaign


def get_campaign(campaign_id):
    campaign = campaigns_coll.document(campaign_id).get().to_dict()
    return campaign


def donate(campaign_id, donations):
    donations_by_id = {
        donation["id"]: donation
        for donation in donations
    }
    campaign = get_campaign(campaign_id)
    goals = campaign["goals"]

    total = 0
    needed = 0
    for goal in goals:
        needed += goal["goal"]
        if goal["id"] not in donations_by_id:
            continue
        goal["donated"] = donations_by_id[goal["id"]]["donated"]
        total += goal["donated"]

    campaign["finished_percent"] = (total // needed) * 100
    campaigns_coll.document(campaign_id).set(campaign)

    organisation_id = campaign["organisation_id"]
    orgs.update_campaign_progress(
        organisation_id,
        campaign_id,
        campaign["finished_percent"],
    )

    return campaign
