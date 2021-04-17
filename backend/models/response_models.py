from marshmallow import Schema, fields


class LoginPostResponse(Schema):
    organisation_id = fields.Str()


class OrganisationGetResponse(Schema):
    name = fields.Str()
    campaigns = fields.List(
        fields.Str()
    )  # TODO napravit model kampanje
    slideshow_id = fields.Str()


class RegisterPostResponse(Schema):
    organisation_id = fields.Str()


class CampaignPostResponse(Schema):
    campaign_id = fields.Str()
