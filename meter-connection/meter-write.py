import MySQLdb

# Open database connection
db = MySQLdb.connect("localhost","root","sensire","sensire_db" )

cursor = db.cursor()

# Prepare SQL query to INSERT a record into the database.
sql = """INSERT INTO Readings(measurement_id,
         value)
         VALUES (2, 100)"""
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

# Close the database
db.close()
