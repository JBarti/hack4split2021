# Backend

## Glovo API

### Headeri
```
Host: api.glovoapp.com
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0
Accept: application/json
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Glovo-API-Version: 14
Glovo-App-Platform: web
Glovo-App-Version: 7
Glovo-App-Type: customer
Glovo-Language-Code: en
Glovo-Device-Id: 202550053
Glovo-App-Development-State: Production
Glovo-Delivery-Location-Latitude: 43.5180885
Glovo-Delivery-Location-Longitude: 16.4523735
Glovo-Delivery-Location-Accuracy: 0
Glovo-Delivery-Location-Timestamp: 1618603108880
Glovo-Location-City-Code: SPU
Origin: https://glovoapp.com
DNT: 1
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
TE: Trailers
```

### Pathovi

#### Stores 

Request
```
GET https://api.glovoapp.com/v3/stores/{storeId}
```

Response
```json
{
    "id": 171596,
    "urn": "glv:store:b37b5855-d645-44c4-867a-2aebabb3d9ea",
    "name": "Tommy",
    "fiscalName": null,
    "slug": "tommy-spu",
    "category": "SUPERMARKET-HR",
    "imageId": "Stores/wqortplgiiga9urgcfsl",
    "itemsType": "CATEGORIZED",
    "open": true,
    "emulateOpen": false,
    "schedulingEnabled": true,
    "schedulingPossible": false,
    "scheduleMessage": null,
    "closedStatusMessage": null,
    "rating": null,
    "description": null,
    "nextOpeningTime": null,
    "serviceFee": 12.99,
    "tags": [],
    "filters": [
        {
            "id": 35547,
            "name": "Samo na glovu",
            "icon": "filters/pwjyht6rxlmunhvnxxyu",
            "displayName": "Only on Glovo",
            "translations": {}
        },
        {
            "id": 35356,
            "name": "Trgovina",
            "icon": "filters/dbvvtfffrrtwlptqrl93",
            "displayName": "Shops",
            "translations": {}
        }
    ],
    "purchasesCommission": 0,
    "categoryId": 875,
    "cartUniqueElements": null,
    "cartTotalElements": null,
    "note": "Dodatna naknada za narudžbe male vrijednosti: 5kn za narudžbe ispod 60kn, 10kn za narudžbe ispod 35kn",
    "distance": "1.1km",
    "addressId": 292013,
    "suggestionKeywords": [
        "tommy"
    ],
    "customDescriptionAllowed": false,
    "productsInformationText": null,
    "productsInformationLink": null,
    "deliveryNotAvailable": false,
    "deliveryNotAvailableMessage": null,
    "address": "Ul. Matice hrvatske 1, 21000, Split, Croatia",
    "location": null,
    "phoneNumber": "+38521600462",
    "specialRequirementsAllowed": false,
    "etaEnabled": true,
    "mcdPartner": false,
    "food": false,
    "allergiesInformationAllowed": false,
    "legalCheckboxRequired": false,
    "dataSharingRequested": false,
    "cityCode": "SPU",
    "marketplace": false,
    "cashSupported": true,
    "promotions": [],
    "highestMinBasketSurcharge": "Kn 60",
    "primeAvailable": false,
    "cutleryRequestAllowed": false,
    "ratingInfo": null,
    "selectedStrategyType": "DELIVERY",
    "supportedStrategies": [
        {
            "type": "DELIVERY"
        }
    ],
    "viewType": "LEGACY_VIEW_LAYOUT"
}
```

Vraca addressId najblizeg ducana lokaciji iz headera

#### Kategorije

Request
```
GET https://api.glovoapp.com/v3/stores/{storeId}/addresses/{addressId}/collections/
```

Response
```json
{
    "collections": [
        {
            "id": 32418493,
            "title": "Piće",
            "image": "CollectionGroups/vpr5c093yhlqi3prarmu",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137115,
                    "title": "Negazirani sokovi",
                    "type": "DEFAULT",
                    "subtitle": "41 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/XGLfMdxB/3858890973006.png",
                            "name": "Nektar Naranča 1 L To ",
                            "price": 8.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/2LY4MT4D/3850108077209.png",
                            "name": "Napitak Neg. Nar/Jab.0,25 L Co",
                            "price": 2.49,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/YCgNjkmM/3858886932390.png",
                            "name": "Nektar Naranča 1 L Bondi Drink",
                            "price": 5.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137121,
                    "title": "Voda",
                    "type": "DEFAULT",
                    "subtitle": "19 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835260",
                            "imageUrl": "https://i.postimg.cc/VLgsnsJm/3858884600987.png",
                            "name": "Voda Negaz.1 L Jana",
                            "price": 5.49,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/hPcPXQP2/3850322007587.png",
                            "name": "Voda Gaz.1,5 L Kalnička",
                            "price": 4.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835261",
                            "imageUrl": "https://i.postimg.cc/hvggQNgX/3858886934134.png",
                            "name": "Voda Negaz.1,5 L Bondi Pet",
                            "price": 3.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137108,
                    "title": "Gazirani sokovi",
                    "type": "DEFAULT",
                    "subtitle": "34 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1727915796",
                            "imageUrl": "https://i.postimg.cc/WzFsnmty/5449000052926.png",
                            "name": "Napitak Gaz.Naranča1,5 L Fanta",
                            "price": 10.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835068",
                            "imageUrl": "https://i.postimg.cc/mDKMMX1n/5449000008046.png",
                            "name": "Napitak Gaz.0,25 L Coca C.Lim.",
                            "price": 5.29,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835064",
                            "imageUrl": "https://i.postimg.cc/hzTL2NQs/87126068.png",
                            "name": "Napitak Gaz.0,5 L Tangerina",
                            "price": 6.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137127,
                    "title": "Energetska pića",
                    "type": "DEFAULT",
                    "subtitle": "7 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/qMVxT9Wn/90162800.png",
                            "name": "Red Bull Bez Šeć.0,25 L Lim",
                            "price": 12.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835387",
                            "imageUrl": "https://i.postimg.cc/dtVK8kWF/9002490100070.png",
                            "name": "Red Bull 0,25 L Lim.",
                            "price": 11.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/MGFj2P5G/5999884034469.png",
                            "name": "Napitak Ene.Hell Class 0,25 L ",
                            "price": 6.69,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137142,
                    "title": "Praškasti napitak i šumeće tablete",
                    "type": "DEFAULT",
                    "subtitle": "4 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835362",
                            "imageUrl": "https://i.postimg.cc/3Np01fry/3850322003534.png",
                            "name": "Cedevita Limun 200 G",
                            "price": 12.49,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835364",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189885",
                            "name": "Cedevita Limun 1 Kg",
                            "price": 39.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835363",
                            "imageUrl": "https://i.postimg.cc/4xdYgNhw/3850322003442.png",
                            "name": "Cedevita Naranča 1 Kg",
                            "price": 39.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418489,
            "title": "Mliječni proizvodi i jaja",
            "image": "CollectionGroups/tzfcpjwgmbsvzex0k6zs",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137145,
                    "title": "Mlijeko",
                    "type": "DEFAULT",
                    "subtitle": "20 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/PCVKbXzn/3858886270546.png",
                            "name": "Mlijeko Trajno 0,9% 1 L Meggle",
                            "price": 6.89,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835349",
                            "imageUrl": "https://i.postimg.cc/F7tMcZFV/3850354002260.png",
                            "name": "Mlijeko Čok.0,5 L Dukat",
                            "price": 6.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835359",
                            "imageUrl": "https://i.postimg.cc/ZK8tvxbR/3859889264334.png",
                            "name": "Mlijeko Trajno 2.5% 1 L Čep",
                            "price": 5.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137125,
                    "title": "Desert",
                    "type": "DEFAULT",
                    "subtitle": "16 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/Ty80NkSt/8000500011126.png",
                            "name": "Desert Ml.Pingui 30 G Kinder",
                            "price": 3.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835426",
                            "imageUrl": "https://i.postimg.cc/qRvF7g4M/3850354001485.png",
                            "name": "Desert Ml.Čok.100 G Mousse Duk",
                            "price": 5.69,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835429",
                            "imageUrl": "https://i.postimg.cc/ZKF25YHv/4014500516288.png",
                            "name": "Desert Ml.400 G Mega Monte",
                            "price": 14.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137120,
                    "title": "Jogurt",
                    "type": "DEFAULT",
                    "subtitle": "41 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835313",
                            "imageUrl": "https://i.postimg.cc/7PcRxxcw/3850354004233.png",
                            "name": "Jogurt Lgg Zob-Ječam 330 G",
                            "price": 9.49,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835307",
                            "imageUrl": "https://i.postimg.cc/nVwyCKs8/3850354001010.png",
                            "name": "Jogurt Tekući 2,8% 1 Kg Dukat",
                            "price": 9.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/cJRW3vpR/3850108030174.png",
                            "name": "Jogurt Čvrsti 900 G Z Bregov",
                            "price": 9.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137118,
                    "title": "Vrhnje",
                    "type": "DEFAULT",
                    "subtitle": "11 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835282",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188224",
                            "name": "Vrhnje Za Kuh.200 G Dukat",
                            "price": 8.49,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835288",
                            "imageUrl": "https://i.postimg.cc/vc3CjdL3/3858886931188.png",
                            "name": "Vrhnje Kiselo 12% 180 G Marine",
                            "price": 2.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/F1x6dQqN/3870085020098.png",
                            "name": "Vrhnje Za Kuh. 500 G Meggle",
                            "price": 16.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137132,
                    "title": "Sir",
                    "type": "DEFAULT",
                    "subtitle": "36 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835437",
                            "imageUrl": "https://i.postimg.cc/bY3zL2sL/3850108058215.png",
                            "name": "Sir Gauda 150 G Vindija ",
                            "price": 12.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835530",
                            "imageUrl": "https://i.postimg.cc/7b7BQcyj/8002710410027.png",
                            "name": "Sir Grana Padano 50 G Zanetti",
                            "price": 5.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835451",
                            "imageUrl": "https://i.postimg.cc/ZBDh7QtW/3850355004270.png",
                            "name": "Sir Gouda Slice 150 G",
                            "price": 15.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137128,
                    "title": "Maslac, margarin",
                    "type": "DEFAULT",
                    "subtitle": "11 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835373",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188204",
                            "name": "Maslac 250 G Vindija",
                            "price": 15.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/7LMkv1Rd/3856015312228.png",
                            "name": "Margo Nova 500 G Zvijezda",
                            "price": 12.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/nLtJwS3q/3856015317384.png",
                            "name": "Margarin Namaz. 250 G Omegol",
                            "price": 9.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137144,
                    "title": "Namazi",
                    "type": "DEFAULT",
                    "subtitle": "8 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835369",
                            "imageUrl": "https://i.postimg.cc/KzCSB93K/3859888858336.png",
                            "name": "Sir Abc Krem 200 G",
                            "price": 8.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835366",
                            "imageUrl": "https://i.postimg.cc/G4XgMJRN/3850354015055.png",
                            "name": "Namaz Ml.70 G Dukatela",
                            "price": 3.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835371",
                            "imageUrl": "https://i.postimg.cc/t4qfZ0vS/8606002110895.png",
                            "name": "Kajmak Mladi 250 G Presiden",
                            "price": 18.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137143,
                    "title": "Jaja",
                    "type": "DEFAULT",
                    "subtitle": "5 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835337",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188450",
                            "name": "Jaja L Razred 10/1 Marinero",
                            "price": 12.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835338",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188453",
                            "name": "Jaja M Razred 10/1 Marinero",
                            "price": 11.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835335",
                            "imageUrl": "https://i.postimg.cc/KvDW9M7J/3857500006905.png",
                            "name": "Jaja M Razred 10/1 Luneta",
                            "price": 16.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418488,
            "title": "Grickalice i slatkiši",
            "image": "CollectionGroups/x1b5lun21apt4xuwaxly",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137126,
                    "title": "Čokolade i bomboniere",
                    "type": "DEFAULT",
                    "subtitle": "29 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835415",
                            "imageUrl": "https://i.postimg.cc/cJvYzZTY/3850102516513.png",
                            "name": "Čokolada Mousse Milky 95 G Dor",
                            "price": 6.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/Njp7Vdth/3046920028363.png",
                            "name": "Čokolada Tamna 85% 100 G Lindt",
                            "price": 18.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1727916929",
                            "imageUrl": "https://i.postimg.cc/v1RxYVLB/7622200007332.png",
                            "name": "Čokolada Jagoda 100 G Milka",
                            "price": 8.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137138,
                    "title": "Bomboni, žvakače gume",
                    "type": "DEFAULT",
                    "subtitle": "15 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835732",
                            "imageUrl": "https://i.postimg.cc/SJTWhRv2/4009900431521.png",
                            "name": "Orbit Spearmint Bočica 84 G",
                            "price": 21.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/T1Vnc904/3850102216147.png",
                            "name": "Bombon Tvr.505 S Crtom 100 G K",
                            "price": 4.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835733",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695187538",
                            "name": "Bombon Gumeni Cola 100 G Harib",
                            "price": 6.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137129,
                    "title": "Grickalice",
                    "type": "DEFAULT",
                    "subtitle": "48 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/qMFyps2C/3859888529113.png",
                            "name": "Pistacio 200 G Mali Gušti Spec",
                            "price": 29.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/sxhjtjNB/5900259094728.png",
                            "name": "Čips Kuk. Hot Corn 100 G Dorit",
                            "price": 10.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835583",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695187590",
                            "name": "Kokice Slane 125 G Bondi",
                            "price": 3.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137139,
                    "title": "Keksi",
                    "type": "DEFAULT",
                    "subtitle": "42 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835696",
                            "imageUrl": "https://i.postimg.cc/ZvYdkzPx/5201360552726.png",
                            "name": "Kroasan Mini Kakao/Van 60 G 7D",
                            "price": 2.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835698",
                            "imageUrl": "https://i.postimg.cc/Kzm2DZbd/3850120295438.png",
                            "name": "Napolitanke 430 G Jadro",
                            "price": 18.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835685",
                            "imageUrl": "https://i.postimg.cc/4HXzJ9Gt/3870450002001.png",
                            "name": "Keks Domaćica Ex.Čok. 220 G Kr",
                            "price": 14.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418491,
            "title": "Voće i povrće",
            "image": "CollectionGroups/nrzt8jzwid1j7zw3a36l",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137148,
                    "title": "Voće i povrće",
                    "type": "DEFAULT",
                    "subtitle": "26 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722836513",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189967",
                            "name": "Celer Korijen",
                            "price": 6.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836506",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189955",
                            "name": "Jabuka Zlatni Delišes",
                            "price": 8.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836508",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189959",
                            "name": "Banana",
                            "price": 9.79,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418483,
            "title": "Delikatesa",
            "image": "CollectionGroups/f975q0xpjdufmcx8rhxc",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137130,
                    "title": "Salame i naresci",
                    "type": "DEFAULT",
                    "subtitle": "28 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835564",
                            "imageUrl": "https://i.postimg.cc/NFYk0z18/3858890203295.png",
                            "name": "Šunka Stancija Naresci 100 G",
                            "price": 12.49,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/1361xg5k/3850139616439.png",
                            "name": "Slanina Domaća Dim. 100 G",
                            "price": 15.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/xCfwbtyQ/3850220150330.png",
                            "name": "Poli 500 G Perutnina",
                            "price": 25.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137112,
                    "title": "Kobasice i hrenovke",
                    "type": "DEFAULT",
                    "subtitle": "13 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/MnzrBYNN/3859892140526.png",
                            "name": "Kobasica Kranjska 160 G Vac",
                            "price": 8.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/2L6S3vmZ/3850139330977.png",
                            "name": "Kobasica Debrecinka 440 G V",
                            "price": 21.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835798",
                            "imageUrl": "https://i.postimg.cc/zyWXLqm0/3850139310825.png",
                            "name": "Hrenovke B.O.250 G",
                            "price": 15.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137137,
                    "title": "Suhomesnato",
                    "type": "DEFAULT",
                    "subtitle": "4 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/J04JS41f/293195.png",
                            "name": "Suha Vratina - Buđola Cca 700 G Delicato",
                            "price": 114.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/QC45DGCH/2122040.png",
                            "name": "Panceta Vac Cca 350 G Delicato",
                            "price": 99.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835789",
                            "imageUrl": "https://i.postimg.cc/YC4Np91k/3858886934981.png",
                            "name": "Buđola 100 G Delicato",
                            "price": 12.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418482,
            "title": "MESO",
            "image": "CollectionGroups/gwv3tdemhjd4jvs0toa4",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137131,
                    "title": "Piletina i puretina",
                    "type": "DEFAULT",
                    "subtitle": "4 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835537",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189891",
                            "name": "Pureće Mljeveno Meso 500 G Vi",
                            "price": 19.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835536",
                            "imageUrl": "https://i.postimg.cc/s26kDC38/3850339402139.png",
                            "name": "Pureći Odr. File Prsa 400 G",
                            "price": 29.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835538",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189894",
                            "name": "Pureći Ćevapčići 532 G Vindij",
                            "price": 19.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418495,
            "title": "Gotova i konzervirana hrana",
            "image": "CollectionGroups/udtsp7cusjgzdwiwetre",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137140,
                    "title": "Konzervirano povrće",
                    "type": "DEFAULT",
                    "subtitle": "53 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/Cxy3sgHP/3850104268731.png",
                            "name": "Kečap Blagi 500 G Podravka ",
                            "price": 10.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/Wb1SkfkD/3850104051012.png",
                            "name": "Ajvar Blagi 690 G Podravka",
                            "price": 22.49,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835638",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695187679",
                            "name": "Rajčica Pasirana 500 G Podravk",
                            "price": 6.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137110,
                    "title": "Pašteta i mesni proizvodi",
                    "type": "DEFAULT",
                    "subtitle": "22 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/BXG3LwD4/3858881220102.png",
                            "name": "Pašteta Čajna 30 G Gavrilov",
                            "price": 3.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/sGMMMHZp/3838471024365.png",
                            "name": "Pašteta Čajna 95 G Argeta",
                            "price": 8.49,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835846",
                            "imageUrl": "https://i.postimg.cc/SJ7hW778/3858881221529.png",
                            "name": "Pašteta Čajna 100 G Gavrilo",
                            "price": 8.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137109,
                    "title": "Juhe",
                    "type": "DEFAULT",
                    "subtitle": "18 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835880",
                            "imageUrl": "https://i.postimg.cc/y8WKRmqy/3858890171600.png",
                            "name": "Juha Pileća 40 G Maggi  ",
                            "price": 3.49,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/65WtWsYS/3858886935599.png",
                            "name": "Juha Krem Gljive 53 G Mariner",
                            "price": 2.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835871",
                            "imageUrl": "https://i.postimg.cc/fRkkYfCx/3850104274619.png",
                            "name": "Juha Krem Rajčica 60 G Podrav",
                            "price": 5.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137134,
                    "title": "Riblje konzerve",
                    "type": "DEFAULT",
                    "subtitle": "17 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/5XB6QCjk/3838929568120.png",
                            "name": "Riba S Povrćem 3X125 G Izola",
                            "price": 35.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/Wt7VZw7Z/8001561400850.png",
                            "name": "Tunj Mr.Ton Masl.Ulje 80 G",
                            "price": 7.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/x17GmCv1/3859888140158.png",
                            "name": "Tunj Filet U Ulju 115 G Eva",
                            "price": 19.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418494,
            "title": "Smrznuta hrana",
            "image": "CollectionGroups/jy6ne02pugoxck1pe1ki",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137136,
                    "title": "Smrznuta hrana",
                    "type": "DEFAULT",
                    "subtitle": "38 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/dtr9yksf/3850116877341.png",
                            "name": "Lignja Patagon. Očiš.400 G ",
                            "price": 56.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835949",
                            "imageUrl": "https://i.postimg.cc/WprHxkqx/5000159344074.png",
                            "name": "Sladoled Snickers",
                            "price": 22.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/LsV1jSZW/3850116007328.png",
                            "name": "Sladoled Linolada Ledo",
                            "price": 10.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418487,
            "title": "Pekarski proizvodi",
            "image": "CollectionGroups/zbjuliifd6ijzvnx5zt9",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137135,
                    "title": "Pekarnica",
                    "type": "DEFAULT",
                    "subtitle": "41 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/F1dGLJBN/8076809512077.png",
                            "name": "Dvopek Integr.315 G Mul.Bian",
                            "price": 15.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836090",
                            "imageUrl": "https://i.postimg.cc/3xQ2BN5d/298877.png",
                            "name": "Kruh Finac 500 G Bobis ",
                            "price": 10.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836066",
                            "imageUrl": "https://i.postimg.cc/28fp4YxH/8076809504751.png",
                            "name": "Tost Pan Bauleto Inte.400 G ",
                            "price": 11.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418486,
            "title": "Osnovne namirnice",
            "image": "CollectionGroups/sjhfoyhu9qkkatk5wofc",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137111,
                    "title": "Priprema kolača i tijesta",
                    "type": "DEFAULT",
                    "subtitle": "35 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835805",
                            "imageUrl": "https://i.postimg.cc/Whb0JsPm/3850104223624.png",
                            "name": "Brašno Glatko T-550 1 Kg Podra",
                            "price": 3.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1727916069",
                            "imageUrl": "https://i.postimg.cc/MvsYpvgJ/3850104219467.png",
                            "name": "Gussnel 200 G Podravka",
                            "price": 7.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835809",
                            "imageUrl": "https://i.postimg.cc/GHpkVbt7/3858889866753.png",
                            "name": "Čokolada Za Kuh. 400 G Kandit",
                            "price": 16.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137133,
                    "title": "Priprema jela",
                    "type": "DEFAULT",
                    "subtitle": "27 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/Jhd9CTqT/3858886931232.png",
                            "name": "Grah 800 G Marinero",
                            "price": 14.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188148",
                            "name": "Ječam 500 G Spectar ",
                            "price": 5.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1727916348",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188152",
                            "name": "Ocat Aceto Bals.500 Ml Don Mar",
                            "price": 14.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137147,
                    "title": "Umaci i začini",
                    "type": "DEFAULT",
                    "subtitle": "29 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722835978",
                            "imageUrl": "https://i.postimg.cc/SRWFjNH0/9001414040218.png",
                            "name": "Začin Češnjak Gran.70 G Kotany",
                            "price": 15.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835958",
                            "imageUrl": "https://i.postimg.cc/wB2mLFYQ/8607100571137.png",
                            "name": "Majoneza Staklo 611 G Thomy ",
                            "price": 29.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722835984",
                            "imageUrl": "https://i.postimg.cc/d1XwhV6n/9001414015445.png",
                            "name": "Začin Peršin 7 G Vr.Kotanyi ",
                            "price": 6.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137114,
                    "title": "Tjestenina, riža, njoki, tortilje",
                    "type": "DEFAULT",
                    "subtitle": "36 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/fR6v1zgX/3858886931331.png",
                            "name": "Riža Dugo Zrno 800 G Marinero ",
                            "price": 7.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836149",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188366",
                            "name": "Tj.Penete 25 400 G S Jajima Ce",
                            "price": 8.49,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836139",
                            "imageUrl": "https://i.postimg.cc/rwyP7wQc/8002066000996.png",
                            "name": "Njoki 500 G Carlo Crivellin",
                            "price": 6.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418490,
            "title": "Osobna njega i bebe",
            "image": "CollectionGroups/vdswogjtxhqxxuriv4os",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137116,
                    "title": "Bebe i mame",
                    "type": "DEFAULT",
                    "subtitle": "34 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722836134",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189094",
                            "name": "Kašica Marelica 190 G Hipp ",
                            "price": 11.49,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/g2xSb5qw/3838945503136.png",
                            "name": "Frutek Kaš.Mar/Kruška 190 G",
                            "price": 9.79,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/sDmMK7hv/3870128010253.png",
                            "name": "Pelene 60/1 Violeta Maxi (7-18",
                            "price": 95.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137107,
                    "title": "Njega i higijena",
                    "type": "DEFAULT",
                    "subtitle": "88 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722836267",
                            "imageUrl": "https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695189572",
                            "name": "Papir Toal.16/1 Violeta Pr",
                            "price": 32.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836263",
                            "imageUrl": "https://i.postimg.cc/5t3F79Y8/4005808125968.png",
                            "name": "Gel Za Tuš.250 Ml Nivea Energy",
                            "price": 15.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/4n0gPSVD/4005808303267.png",
                            "name": "Deo Roll-On 50 Ml Nivea Fr.Rol",
                            "price": 25.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418485,
            "title": "Doručak i topli napitci",
            "image": "CollectionGroups/xsfvckn1uhxpzcj1zhvh",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137113,
                    "title": "Kava i čaj",
                    "type": "DEFAULT",
                    "subtitle": "34 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722836194",
                            "imageUrl": "https://i.postimg.cc/QVYyZmGg/3858881080263.png",
                            "name": "Kava Jubil. Mlj.Vak. 250 G Fra",
                            "price": 19.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836204",
                            "imageUrl": "https://i.postimg.cc/RVY79N8h/3858881088313.png",
                            "name": "Cappuccino Classic 112 G Franc",
                            "price": 14.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836196",
                            "imageUrl": "https://i.postimg.cc/D0nS7KQx/3858881083813.png",
                            "name": "Čaj Šumsko Voće 55 G Omot Fran",
                            "price": 14.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137119,
                    "title": "Pahuljice i namazi",
                    "type": "DEFAULT",
                    "subtitle": "31 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": "Products/1722836455",
                            "imageUrl": "https://i.postimg.cc/RVY17XcX/3850104263538.png",
                            "name": "Lino Jastučići Tam.Punj.500 G",
                            "price": 28.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/MTVrm35V/3856020214180.png",
                            "name": "Pekmez Od Šljiva 440 G Podravk",
                            "price": 16.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836432",
                            "imageUrl": "https://i.postimg.cc/2SmNDkb3/3856020213831.png",
                            "name": "Džem Miješ.Voće 870 G Podravka",
                            "price": 12.49,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137146,
                    "title": "Zdravi kutak",
                    "type": "DEFAULT",
                    "subtitle": "39 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/yN4gBShc/4011800584511.png",
                            "name": "Corny Big Banana 50 G",
                            "price": 3.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836470",
                            "imageUrl": "https://i.postimg.cc/jSxrWj8J/3859891427673.png",
                            "name": "Lan 150 G Natura",
                            "price": 2.89,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/HnghfSR7/4007933454012.png",
                            "name": "Bio Kruh Raženi 500 G Delba",
                            "price": 11.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        },
        {
            "id": 32418492,
            "title": "Domaćinstvo i kućni ljubimci",
            "image": "CollectionGroups/ov8yp1lmucgkjsgx7lxb",
            "icon": null,
            "isGroup": true,
            "collections": [
                {
                    "id": 187137117,
                    "title": "Čišćenje i pospremanje",
                    "type": "DEFAULT",
                    "subtitle": "62 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/J0vykY9X/3858886937340.png",
                            "name": "Vreće Za Otpatke Domax 160 L ",
                            "price": 12.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/k6M9HfPr/9000101344844.png",
                            "name": "Somat 540 Ml Gel Gold Anti. Le",
                            "price": 39.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/ZR6hWRVQ/8002030140680.png",
                            "name": "Raid Laminirane Tab.Za El.Apar",
                            "price": 25.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137141,
                    "title": "Kućni ljubimci",
                    "type": "DEFAULT",
                    "subtitle": "28 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/bv8LbvKk/5998749107362.png",
                            "name": "Pedigree Sp 400 G Mini Per/Pov",
                            "price": 13.99,
                            "description": null
                        },
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/GHwc546j/9003579302545.png",
                            "name": "Pedigree Pp 200 G Multi Biscro",
                            "price": 8.49,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836554",
                            "imageUrl": "https://i.postimg.cc/FYX73W9N/7613034364777.png",
                            "name": "Felix Mm 100 G Gov.Vrećica",
                            "price": 4.19,
                            "description": null
                        }
                    ],
                    "promotions": []
                },
                {
                    "id": 187137123,
                    "title": "Baterije",
                    "type": "DEFAULT",
                    "subtitle": "2 proizvodi",
                    "isGroup": false,
                    "previews": [
                        {
                            "imageId": null,
                            "imageUrl": "https://i.postimg.cc/8Cc6XTcV/5000394077164.png",
                            "name": "Duracell Basic Aaa K4 Duralock",
                            "price": 34.99,
                            "description": null
                        },
                        {
                            "imageId": "Products/1722836356",
                            "imageUrl": "https://i.postimg.cc/kgn88QdG/5000394076952.png",
                            "name": "Duracell Basic Aa K4 Duralock ",
                            "price": 34.99,
                            "description": null
                        }
                    ],
                    "promotions": []
                }
            ]
        }
    ]
}
```

#### Proizvodi

Request
```
GET https://api.glovoapp.com/v3/stores/{storeId}/addresses/{addressId}/collections/{collectionId}
```

Response
```json
{
    "sections": [
        {
            "id": 141165603,
            "name": "Helados",
            "type": "DEFAULT",
            "products": [
                {
                    "id": 1083388560,
                    "externalId": "79645",
                    "urn": "glv:product:53fec5ee-d451-4a8b-89e8-34ae43ddb919",
                    "name": "Bocadito helado Chomp 180 g.",
                    "description": "",
                    "price": 299.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579619178/Items/79645.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393673,
                    "externalId": "81350",
                    "urn": "glv:product:48d7fe16-fc0e-426d-9693-5a0bc1de5231",
                    "name": "Helado Eskimo chocolate, vainilla y frutilla 1.5 kg.",
                    "description": "",
                    "price": 379.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676880/Items/81350.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083388573,
                    "externalId": "79646",
                    "urn": "glv:product:1e5e7260-bc72-4c85-bad7-77b9b6ac774a",
                    "name": "Bocadito helado Chomp con almendras 180 g.",
                    "description": "",
                    "price": 299.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579619179/Items/79646.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083388570,
                    "externalId": "79647",
                    "urn": "glv:product:0c20c45c-e20b-4a2d-a75a-04600feb5387",
                    "name": "Bocadito helado Chomp de crema tofee 160 g.",
                    "description": "",
                    "price": 299.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579619180/Items/79647.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393696,
                    "externalId": "81352",
                    "urn": "glv:product:4caa4a68-22ba-4267-9d6b-96d00b982de2",
                    "name": "Helado Frigor dulce de leche - frutilla - vainilla 1.5 kg",
                    "description": "",
                    "price": 509.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676881/Items/81352.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393751,
                    "externalId": "81344",
                    "urn": "glv:product:64ef2682-e380-4bd8-acd7-acbb5dc600de",
                    "name": "Helado de palito de agua Popsy frutal 10 u.",
                    "description": "",
                    "price": 335.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676877/Items/81344.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393322,
                    "externalId": "81332",
                    "urn": "glv:product:ce142865-6ecc-4ed3-8b2c-9da8ea186221",
                    "name": "Helado Águila granizado 450 cc.",
                    "description": "",
                    "price": 198.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676871/Items/81332.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393681,
                    "externalId": "81351",
                    "urn": "glv:product:2e4b1b81-a1a5-4ff1-9347-f7a5008768b4",
                    "name": "Helado Frigor dulce de leche - frutilla - chocolate 1.5 kg",
                    "description": "",
                    "price": 509.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676881/Items/81351.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393646,
                    "externalId": "81353",
                    "urn": "glv:product:f8b87bd6-6be7-4e5d-83b2-d912cd88266d",
                    "name": "Helado Frigor vainilla - dulce de leche 500 g.",
                    "description": "",
                    "price": 263.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676882/Items/81353.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393301,
                    "externalId": "81338",
                    "urn": "glv:product:642b49ca-0274-45d5-af2b-ab9afeed1765",
                    "name": "Helado cono dulce de leche max Epa 88 g.",
                    "description": "",
                    "price": 135.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676874/Items/81338.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393659,
                    "externalId": "81355",
                    "urn": "glv:product:4c308a1e-515e-4c4f-8d58-a18e6dcfc474",
                    "name": "Helado Popsy frutal Frigor 45 g.",
                    "description": "",
                    "price": 30.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676883/Items/81355.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393626,
                    "externalId": "81357",
                    "urn": "glv:product:06fa96e8-065f-46ce-b465-0f0dc92bb8ee",
                    "name": "Helado Sin parar Frigor chocolate y dulce de leche 90 g.",
                    "description": "",
                    "price": 96.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676884/Items/81357.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393665,
                    "externalId": "81356",
                    "urn": "glv:product:48ede5d1-341c-4585-8d1a-075e34bfcb13",
                    "name": "Helado Sin parar Frigor americana y frutilla 90 g.",
                    "description": "",
                    "price": 96.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676884/Items/81356.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393654,
                    "externalId": "81354",
                    "urn": "glv:product:ca3b70de-ca0f-477e-ab93-ed0d3027749f",
                    "name": "Helado Nesquik 41 g.",
                    "description": "",
                    "price": 50.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676883/Items/81354.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393711,
                    "externalId": "81339",
                    "urn": "glv:product:e757def3-47f1-4b14-a1bd-639e6e034989",
                    "name": "Helado de frutilla La Frutta 69 g.",
                    "description": "",
                    "price": 70.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676875/Items/81339.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083393643,
                    "externalId": "81359",
                    "urn": "glv:product:a58275c2-cc3d-4161-8f31-f683c01b1689",
                    "name": "Helado super dulce de leche Luxor Frigor 53 g.",
                    "description": "",
                    "price": 70.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579676885/Items/81359.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                }
            ]
        },
        {
            "id": 141167654,
            "name": "Postres Congelados",
            "type": "DEFAULT",
            "products": [
                {
                    "id": 1102331839,
                    "externalId": "84640",
                    "urn": "glv:product:a3cbfea1-49a9-44b2-80de-73c1c2f71da1",
                    "name": "Postre helado Frigor almendrado crocante 600 g.",
                    "description": "",
                    "price": 433.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579678552/Items/84640.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083406267,
                    "externalId": "84641",
                    "urn": "glv:product:33559800-da32-4207-a294-6e9001277a97",
                    "name": "Postre helado Ice Cream bombón escocés 150 cc.",
                    "description": "",
                    "price": 359.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579678552/Items/84641.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083406176,
                    "externalId": "84639",
                    "urn": "glv:product:7f6dadf8-193c-40be-b205-bc58facaeaa1",
                    "name": "Postre helado Chocotorta chocolinas  637 g.",
                    "description": "",
                    "price": 369.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579678551/Items/84639.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                },
                {
                    "id": 1083405893,
                    "externalId": "84600",
                    "urn": "glv:product:8609ac1e-4bc1-43ac-b9fe-62b25b15e2c8",
                    "name": "Postre almendrado Arcor 637 g.",
                    "description": "",
                    "price": 369.0,
                    "imageUrl": "https://res.cloudinary.com/danzai-glovo/image/upload/v1579678531/Items/84600.webp",
                    "imageId": null,
                    "attributeGroups": [],
                    "promotion": null
                }
            ]
        }
    ]
}
```

