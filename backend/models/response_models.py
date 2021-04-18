from marshmallow import Schema, fields


class Slideshow(Schema):
    title = fields.Str()
    description = fields.Str()
    image_urls = fields.List(fields.Url())


class LoginPostResponse(Schema):
    organisation_id = fields.Str()


class OrganisationCampaign(Schema):
    date_from = fields.Str()
    date_to = fields.Str()
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
    slideshow = fields.Nested(Slideshow)


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
    image_url = fields.Url()


class ProductsGetResponse(Schema):
    products = fields.List(fields.Nested(GlovoProducts))


class CampaignDonatePostResponse(Schema):
    campaign_id = fields.Str()


class CampaignGoals(Schema):
    category = fields.Str()
    id = fields.Str()
    name = fields.Str()
    image_url = fields.Url()
    donated = fields.Int()
    goal = fields.Int()


class CampaignGetResponse(Schema):
    tags = fields.List(fields.Str())
    name = fields.Str()
    slideshow_id = fields.Str()
    analytics_id = fields.Str()
    date_from = fields.Str()
    date_to = fields.Str()
    location = fields.Str()
    lat = fields.Float()
    long = fields.Float()
    finished_percent = fields.Int()
    goals = fields.List(fields.Nested(CampaignGoals))
    slideshow = fields.Nested(Slideshow)
