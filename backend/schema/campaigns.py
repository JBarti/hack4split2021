from db import db
from schema import slideshows, analytics

campaigns_coll = db.collection("campagins")


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
    }

    campaign_doc = campaigns_coll.document()
    campaign_doc.set(campaign)

    return campaign_doc.id, campaign
