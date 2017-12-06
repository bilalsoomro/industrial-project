import MySQLdb

# Open database connection
db = MySQLdb.connect("localhost","root","sensire","sensire_db" )

cursor = db.cursor()

# query the table
cursor.execute("SELECT * from Readings")

# Loop through results
for reading in cursor:
    print("reading: {}").format(reading)

# Close the database
db.close()