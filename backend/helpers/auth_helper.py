from functools import wraps
import random
import string

from flask import session, redirect, url_for, jsonify
from passlib.hash import sha256_crypt


def authorized(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        conditions = [session.get("username")]
        if all(conditions):
            return func(*args, **kwargs)
        return jsonify({"error": "Not authorized"}), 401
    return wrapper


def hash_password(password):
    return sha256_crypt.hash(password)


def verify_password(password, password_hash):
    return sha256_crypt.verify(password, password_hash)


def get_random_string(length):
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str
