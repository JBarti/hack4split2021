from db import db

analytics_coll = db.collection("analytics")


def create_empty_analytics():
    analytics = {
        "locations": [],
        "conversions": [],
    }

    analytics_doc = analytics_coll.document()
    analytics_doc.set(analytics)

    return analytics_doc.id, analytics
