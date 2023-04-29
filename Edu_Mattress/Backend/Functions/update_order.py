import mysql.connector
import json
import os


def update_order(a):
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "update order_info set bill_status ='%s',order_status='%s' where customer_id='%s' and product_id='%s' and dt='%s'  " % (
        a[2], a[3], a[0], a[1], a[4])
    print(e)
    mycursor.execute(e)
    mydb.commit()

    return "saved successfully"
