import mysql.connector
import json
import os


def Review(a):

    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()

    e = "insert into review(customer_id,product_id,rating,comment)values('%s','%s','%s','%s')" % (
        a[0],  a[1],  a[3], a[2])

    mycursor.execute(e)
    mydb.commit()

    e = "update  order_info set Review='Reviewed' where customer_id='%s' and product_id='%s'" % (
        a[0], a[1])

    mycursor.execute(e)
    mydb.commit()
    e = "select rating,trating   from product where product_id='%s' " % (a[1])
    mycursor.execute(e)
    r = mycursor.fetchall()
    print((r[0][0]+int(a[3]))/2, r[0][1]+1)

    e = "update  product set rating='%s' ,trating='%s' where  product_id='%s'" % (
        (r[0][0]+int(a[3]))/2, r[0][1]+1, a[1])
    print(e)
    mycursor.execute(e)
    mydb.commit()
    return "Added successfully"
