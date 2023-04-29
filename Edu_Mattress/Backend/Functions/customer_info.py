import mysql.connector
import json
import os


def customer_info():
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "select * from customer_info  order by total_orders  "

    mycursor.execute(e)
    temp = mycursor.fetchall()

    return json.dumps(temp)
