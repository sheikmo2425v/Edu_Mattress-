import mysql.connector
import json
import os


def order_info(a):
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "select * from order_info where customer_id='%s'  order by order_status  " % (
        a['customer_id'])
    print(e)
    mycursor.execute(e)
    temp = mycursor.fetchall()

    return json.dumps(temp)
