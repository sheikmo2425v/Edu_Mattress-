import mysql.connector


def signup(a):
    mydb = mysql.connector.connect(
        host="localhost", user="root",  password="",  database="mattress")
    mycursor = mydb.cursor()
    e = "insert into customer_(name,Email_id,password)values('%s','%s','%s')" % (
        a["name"],  a["Email"],  a["password"])

    mycursor.execute(e)
    mydb.commit()
    e = "select customer_id from customer_ where Email='%s' " % (a["Email"])
    mycursor.execute(e)
    id = mycursor.fetchall()
    e = "insert into customer_info(customer_id,name,Email_id,password)values('%s','%s','%s','%s')" % (id[0][0],
                                                                                                      a["name"],  a["Email"],  a["password"])

    mycursor.execute(e)
    mydb.commit()

    return ("Account created successfully ")
