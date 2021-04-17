from firebase_admin import (
    credentials,
    initialize_app,
    firestore,
)


cred = credentials.Certificate("./credentials.json")
initialize_app(cred, {
    "databaseURL": "https://hack4split2021.firebaseio.com",
})

db = firestore.client()


def create_id():
    pass
