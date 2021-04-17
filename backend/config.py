from apispec.ext.marshmallow import MarshmallowPlugin
from apispec import APISpec


class Config:
    SECRET_KEY = "\xff^\x10ef\x8bn\x01'\xc9\x96\x8f\x97*6fHU\xf8\xfb\xb2?\x8a1"
    APISPEC_SPEC = APISpec(
        title="pets",
        version="v1",
        plugins=[MarshmallowPlugin()],
        openapi_version="2.0.0"
    )
    APISPEC_SWAGGER_URL = "/api/swagger/"
    APISPEC_SWAGGER_UI_URL = "/api/swagger-ui"


class ConfigDev(Config):
    DEBUG = True


class ConfigProd(Config):
    DEBUG = False
