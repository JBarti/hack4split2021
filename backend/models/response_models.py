from marshmallow import Schema, fields


class LoginPostResponse(Schema):
    organisation_id = fields.Str()


class OrganisationCampaign(Schema):
    date_from = fields.DateTime(format="iso")
    date_to = fields.DateTime(format="iso")
    finished_percent = fields.Int()
    location = fields.Str()
    name = fields.Str()
    tags = fields.List(fields.Str())


class OrganisationGetResponse(Schema):
    name = fields.Str()
    campaigns = fields.List(
        fields.Nested(OrganisationCampaign)
    )
    slideshow_id = fields.Str()


class RegisterPostResponse(Schema):
    organisation_id = fields.Str()


class CampaignPostResponse(Schema):
    campaign_id = fields.Str()


class GlovoProducts(Schema):
    id = fields.Int()
    category = fields.Str()
    name = fields.Str()
    category = fields.Str()
    price = fields.Int()
    image_url = fields.URL()


class ProductsGetResponse(Schema):
    products = fields.List(fields.Nested(GlovoProducts))


class CampaignDonatePostResponse(Schema):
    campaign_id = fields.Str()


class CampaignGoals(Schema):
    category = fields.Str()
    id = fields.Str()
    name = fields.Str()
    image_url = fields.URL()
    donated = fields.Int()
    goal = fields.Int()


class CampaignGetResponse(Schema):
    tags = fields.List(fields.Str())
    name = fields.Str()
    slideshow_id = fields.Str()
    analytics_id = fields.Str()
    date_from = fields.DateTime(format="iso")
    date_to = fields.DateTime(format="iso")
    location = fields.Str()
    lat = fields.Float()
    long = fields.Float()
    finished_percent = fields.Int()
    goals = fields.List(fields.Nested(CampaignGoals))
