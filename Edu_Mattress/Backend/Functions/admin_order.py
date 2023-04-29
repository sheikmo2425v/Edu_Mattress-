import mysql.connector
import json
import os


def admin_order():
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "select * from order_info order by order_status "

    print(e)
    mycursor.execute(e)
    temp = mycursor.fetchall()

    return json.dumps(temp)
