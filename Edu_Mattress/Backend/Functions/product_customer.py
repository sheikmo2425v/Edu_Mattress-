import mysql.connector
import json


def product_customer(a):
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "select * from product "

    mycursor.execute(e)
    temp1 = mycursor.fetchall()
    e = "select * from customer_info where customer_id ='%s'" % (
        a['customer_id'])

    mycursor.execute(e)
    temp2 = mycursor.fetchall()
    temp = [temp1, temp2]
    return json.dumps(temp)
