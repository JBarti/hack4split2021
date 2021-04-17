db_mock = {
    "organisation_account": {
        # One organisation can have multiple accounts linked to it
        "stanko": {
            "password": "hashhashhash",
            "email": "email@gmail.com",
            "organisation_id": "abcefg",
            "verified": True,
        },
        "mirko": {
            "password": "hashhashhash",
            "email": "email@gmail.com",
            "organisation_id": "abcefg",
        },
    },
    "organisation": {
        "abcefg": {  # organisation id
            "name": "Zvono",
            "slideshow_id": "slides1",
            "campaigns": [],
        },
    },
    "campaigns": {
        "camp1": {
            "tags": ["hrana", "potres"],
            "name": "Za potresene potresima",
            "slideshow_id": "slides2",
            "anayltics_id": "anal1",
            "date_from": "2020-04-15",
            "date_to": "2020-05-15",
            "location": "Varazdinska 34",
            "lat": 45.092,
            "long": 16.313,
            "goals": {  # Popis proizvoda trebaju za kampanju
                "product_1": {  # Standardni barkod kojeg dobijemo sa glova
                    "category": "Negazirani sokovi",
                    "id": "product_1",
                    "ime": "Sirup borovnica 0,75 L Maraska",
                    "price": 16.99,
                    "imageUrl": "https://i.postimg.cc/Njdj8z6P/3850158104122.png",
                    "to_be_ordered": 100,
                    "goal": 500,
                },
                "product_2": {  # Standardni barkod kojeg dobijemo sa glova
                    "category": "Negazirani sokovi",
                    "id": "product_1",
                    "ime": "Sirup borovnica 0,75 L Maraska",
                    "price": 69.42,
                    "imageUrl": "https://i.postimg.cc/Njdj8z6P/3850158104122.png",
                    "to_be_ordered": 456,
                    "goal": 500,
                },
            },
        },
    },
    "slideshows": {
        "slides1": {  # id slideshowa
            "slides1_1": {  # id slideshow slidea
                "title": "Ovo je prvi slajd naseg slideshowa",
                "description": "Ljudi potreseni su mega potreseni potresom",
                "image": "https://picsum.photos/800/400",
            },
            "slides1_2": {
                "title": "Ovo je prvi slajd naseg slideshowa",
                "description": "Ljudi potreseni su mega potreseni potresom",
                "image": "https://picsum.photos/800/400",
            },
        },
        "slides2": {
            "slides2_1": {
                "title": "Ovo je prvi slajd naseg slideshowa",
                "description": "Ljudi potreseni su mega potreseni potresom",
                "image": "https://picsum.photos/800/400",
            },
            "slides2_2": {
                "title": "Ovo je prvi slajd naseg slideshowa",
                "description": "Ljudi potreseni su mega potreseni potresom",
                "image": "https://picsum.photos/800/400",
            },
        }
    },
    "analytics": {
        "anal1": {
            "locations": {
                "Ruđera Boškovića 25": {  # Use location as analytic id
                    "clicks": 100,
                    "conversions": 25,
                    "avg_payment": 100,
                    "max_payment": 150,
                    "min_payment": 10,
                }
            },
            "conversions": [
                {
                    "location": "Ruđera Boškovića 25",
                    "products_bought": [
                        {
                            "category": "Negazirani sokovi",
                            "id": "product_1",
                            "ime": "Sirup borovnica 0,75 L Maraska",
                            "price": 69.42,
                            "products_bought": 10,
                        },
                    ],
                }
            ],
        }
    },
    "tags": ["hrana", "potres"]
}
