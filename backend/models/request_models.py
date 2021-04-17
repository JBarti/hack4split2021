from marshmallow import Schema, fields


class LoginPostRequest(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)


class OrganisationGetRequest(Schema):
    organisation_id = fields.Str(required=True)


class RegisterPostRequest(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)
    email = fields.Str(required=True)
    organisation_name = fields.Str(required=True)
