from db import db

slideshows_coll = db.collection("slideshow")


def create_slideshow(title, description, image_urls):
    slideshow = {
        "title": title,
        "description": description,
        "image_urls": image_urls,
    }

    slideshow_doc = slideshows_coll.document()
    slideshow_doc.set(slideshow)

    return slideshow_doc.id, slideshow


def get_slideshow(slideshow_id):
    slideshow_doc = slideshows_coll.document(slideshow_id).get()
    return slideshow_doc.to_dict()
