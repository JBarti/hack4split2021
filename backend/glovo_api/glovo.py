#!/usr/bin/env python3

import requests
from concurrent.futures import ThreadPoolExecutor, as_completed


class GlovoApi:
    def __init__(self, lat, lon):
        self.storeid = 171596
        self.lat = lat
        self.lon = lon
        self.headers = {
            "Host": "api.glovoapp.com",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "application/json",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            "Glovo-API-Version": "14",
            "Glovo-App-Platform": "web",
            "Glovo-App-Version": "7",
            "Glovo-App-Type": "customer",
            "Glovo-Language-Code": "en",
            "Glovo-Device-Id": "202550053",
            "Glovo-App-Development-State": "Production",
            "Glovo-Delivery-Location-Latitude": str(lat),
            "Glovo-Delivery-Location-Longitude": str(lon),
            "Glovo-Delivery-Location-Accuracy": "0",
            "Glovo-Delivery-Location-Timestamp": "1618603108880",
            "Glovo-Location-City-Code": "SPU",
            "Origin": "https://glovoapp.com",
            "DNT": "1",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "TE": "Trailers",
        }
        self.__address_id = self.__fetch_address_id()
        self.__categories = self.__fetch_categories()
        self.__products = self.__fetch_products()

    def __fetch_address_id(self):
        url = f"https://api.glovoapp.com/v3/stores/{self.storeid}"
        response = requests.get(url, headers=self.headers)
        if response.ok:
            print(response.json()["addressId"])
            return response.json()["addressId"]

        raise ConnectionError

    def __fetch_categories(self):
        url = f"https://api.glovoapp.com/v3/stores/{self.storeid}/addresses/{self.__address_id}/collections"
        response = requests.get(url, headers=self.headers)
        data = response.json()
        subcollections = []
        for collection in data["collections"]:
            for subcollection in collection["collections"]:
                subcollections.append(
                    {
                        "title": subcollection["title"],
                        "id": subcollection["id"],
                    }
                )

        return subcollections

    def __fetch_products_from_category(self, category: dict):
        products = []
        url = f"https://api.glovoapp.com/v3/stores/{self.storeid}/addresses/{self.__address_id}/collections/{category['id']}"
        response = requests.get(url, headers=self.headers)
        if response.ok:
            data = response.json()
            for product in data["sections"][0]["products"]:
                products.append(
                    {
                        "id": product["id"],
                        "category": data["sections"][0]["name"],
                        "name": product["name"],
                        "price": product["price"],
                        "image_url": product["imageUrl"],
                    }
                )
        return products

    def __fetch_products(self):
        products = []
        with ThreadPoolExecutor(max_workers=20) as execute:
            futures = []
            for category in self.__categories:
                futures.append(
                    execute.submit(self.__fetch_products_from_category, category)
                )
            for thread in as_completed(futures):
                products += thread.result()
        return products

    def get_products(self):
        return self.__products
