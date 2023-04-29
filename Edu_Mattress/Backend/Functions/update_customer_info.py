import mysql.connector
import json
import os


def update_customer_info(a):
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "update customer_info set discount ='%s' where customer_id='%s'  " % (
        a[1], a[0])
    print(e)
    mycursor.execute(e)
    mydb.commit()

    return "saved successfully"
