from marshmallow import Schema, fields


class LoginPostRequest(Schema):
    email = fields.Str(required=True)
    password = fields.Str(required=True)


class OrganisationGetRequest(Schema):
    organisation_id = fields.Str(required=True)


class RegisterPostRequest(Schema):
    email = fields.Str(required=True)
    password = fields.Str(required=True)
    organisation_name = fields.Str(required=True)


class ProductGoal(Schema):
    id = fields.Int(required=True)
    goal = fields.Int(required=True, validate=lambda x: x > 0)
    donated = fields.Int(required=False, missing=0)


class Slideshow(Schema):
    title = fields.Str(required=True)
    description = fields.Str(required=True)
    image_urls = fields.List(fields.URL(), required=True)


class CampaignPostRequest(Schema):
    tags = fields.List(fields.Str(), missing=[])
    name = fields.Str(required=True)
    date_from = fields.DateTime(required=True, format="iso")
    date_to = fields.DateTime(required=True, format="iso")
    location = fields.Str(required=True)
    lat = fields.Float(required=True)
    long = fields.Float(required=True)
    goals = fields.List(fields.Nested(ProductGoal), required=True)
    slideshow_data = fields.Nested(Slideshow, required=True)


class ProductsGetRequest(Schema):
    search_term = fields.Str(required=True)
    lat = fields.Float(required=True)
    long = fields.Float(required=True)


class CampaignDonation(Schema):
    id = fields.Int(required=True)
    donated = fields.Int(required=True)


class CampaignDonatePostRequest(Schema):
    campaign_id = fields.Str(required=True)
    donations = fields.List(fields.Nested(CampaignDonation))
    location = fields.Str(required=False)


class CampaignGetRequest(Schema):
    campaign_id = fields.Str(required=True)
