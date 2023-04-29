from Functions import signup, login, store_product, product, product_customer, order_product, order_info, customer_info, admin_order, update_order, update_customer_info, Review, comment
import requests

from datetime import datetime, timedelta
import os
from flask_cors import *
from flask import *

import json

# import cv2
import os

app = Flask(__name__)
cros = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/Mattress/signup', methods=['POST'], strict_slashes=False)
def Mattress_signup():
    a = request.json
    return (signup.signup(a))


@app.route('/Mattress/login', methods=['POST'], strict_slashes=False)
def Mattress_login():
    a = request.json

    return (login.login(a))


@app.route('/Mattress/store_product', methods=['POST'], strict_slashes=False)
def Mattress_store_product():
    file = request.files['file']
    files = request.files.getlist('mfile')
    a = request.form

    return (store_product.store_product(a, file, files))


@app.route('/Mattress/product', methods=['POST'], strict_slashes=False)
def Mattress_product():

    return (product.product())


@app.route('/Mattress/product_customer', methods=['POST'], strict_slashes=False)
def Mattress_product_customer():
    a = request.json

    return (product_customer.product_customer(a))


@app.route('/Mattress/order_product', methods=['POST'], strict_slashes=False)
def Mattress_order_product():
    a = request.json

    return (order_product.order_product(a))


@app.route('/Mattress/order_info', methods=['POST'], strict_slashes=False)
def Mattress_order_info():
    a = request.json

    return (order_info.order_info(a))


@app.route('/Mattress/Admin_order_info', methods=['POST'], strict_slashes=False)
def Mattress_Admin_order_info():

    return (admin_order.admin_order())


@app.route('/Mattress/update_order_info', methods=['POST'], strict_slashes=False)
def Mattress_update_order_info():
    a = request.json
    return (update_order.update_order(a))


@app.route('/Mattress/customer_info', methods=['POST'], strict_slashes=False)
def Mattress_customer_info():

    return (customer_info.customer_info())


@app.route('/Mattress/update_customer_info', methods=['POST'], strict_slashes=False)
def Mattress_update_customer_info():

    a = request.json
    return (update_customer_info.update_customer_info(a))


@app.route('/Mattress/review_product', methods=['POST'], strict_slashes=False)
def Mattress_review_product():

    a = request.json
    return (Review.Review(a))


@app.route('/Mattress/comment', methods=['POST'], strict_slashes=False)
def Mattress_comment():

    a = request.json
    return (comment.comment(a))


if __name__ == "__main__":
    app.run(debug=True)
