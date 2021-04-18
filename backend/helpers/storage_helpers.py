from firebase_admin import storage
from db import bucket


def upload_file(filename, file):
    blob = bucket.blob(filename)
    blob.upload_from_file(file)
    blob.make_public()
    return blob.public_url


def delete_file(url):
    # Example:
    # "https://storage.googleapis.com/schedule-69ea0.appspot.com/Screenshot%20from%202020-04-25%2021-42-27.png"
    filename = url.split("/")[-1]
    filename = filename.replace("%20", " ")
    blob = bucket.blob(filename)
    blob.delete()
