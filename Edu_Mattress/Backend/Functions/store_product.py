import mysql.connector
import json
import os
from PIL import Image


def store_product(a, file, files):

    path = "./public/images/"
    # try:
    #     file.save('./bank/public/images/%s.jpg' % (a["name"]))
    # except:
    if not os.path.exists(path):
        os.makedirs(path)
    file.save('./public/images/%s.jpg' % (a["name"]))
    path = "./public/images/%s/" % (a["name"])
    if not os.path.exists(path):
        os.makedirs(path)
    k = 1
    for i, mfile in enumerate(files):

        file_ = f"{path}{i}.jpg"
        mfile.save(file_)
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "insert into product(product_name,Price,stock)values('%s','%s','%s')" % (
        a["name"],  a["price"],  a["tproduct"])

    mycursor.execute(e)
    mydb.commit()
    return "Added successfully"
