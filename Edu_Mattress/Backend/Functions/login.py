import mysql.connector
import json


def login(a):
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "select name from Admin where email_id='%s' And password='%s'" % (
        a["Email"], a["password"])
    mycursor.execute(e)
    temp = mycursor.fetchall()
    data = ["admin", temp]
    if temp == []:
        e = "select name,customer_id from customer_ where Email_id='%s' And Password='%s'" % (
            a["Email"], a["password"])

        mycursor.execute(e)
        temp = mycursor.fetchall()
        data = ["customer", temp]
    return json.dumps(data)
