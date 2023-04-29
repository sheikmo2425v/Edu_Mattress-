import mysql.connector
import json


def comment(a):
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
#     SELECT c.name, m.height, m.weight
# FROM customer c
# INNER JOIN mai m ON c.id = m.customer_id;
    e = "select r.rating,r.comment,c.name from customer_  c inner join review r on c.customer_id=r.customer_id  where r.product_id='%s'  order by rating desc  " % (
        a[0])
    print(e)
    mycursor.execute(e)
    temp = mycursor.fetchall()

    return json.dumps(temp)
