import mysql.connector
import json
import os
import datetime


def order_product(a):

    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    today = datetime.date.today()
    future_date = today + datetime.timedelta(days=10)
    e = "insert into order_info(customer_id,product_id,discount_price,delivery_date)values('%s','%s','%s','%s')" % (
        a[0],  a[1],  a[2], str(future_date.strftime("%Y-%m-%d")))
    print(e)
    mycursor.execute(e)
    mydb.commit()

    e = "update  customer_info set Total_orders=Total_orders+1 where customer_id='%s'" % (
        a[0])
    print(e)
    mycursor.execute(e)
    mydb.commit()
    return "Added successfully"
