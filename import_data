import pymysql
import json
from datetime import datetime

# Hubungkan ke database MySQL
db = pymysql.connect(host="localhost", user="root", db="technicaltest")
cursor = db.cursor()

# Fungsi untuk memuat data JSON
def load_json(file_path):
    with open(file_path, "r") as file:
        data = json.load(file)
    return data

# Memasukkan data status ke dalam tabel status (hanya sekali, jika belum ada)
def insert_status():
    try:
        cursor.execute("INSERT INTO status (id, name) VALUES (0, 'SUCCESS'), (1, 'FAILED')")
        db.commit()
    except pymysql.MySQLError as e:
        print("Status already exists:", e)

# Memasukkan data transaksi ke dalam tabel data
def insert_transactions(data):
    for transaction in data["data"]:
        id = transaction["id"]
        productID = transaction["productID"]
        productName = transaction["productName"]
        amount = float(transaction["amount"]) 
        customerName = transaction["customerName"]
        status = int(transaction["status"])
        transactionDate = datetime.strptime(transaction["transactionDate"], "%Y-%m-%d %H:%M:%S")
        createBy = transaction["createBy"]
        createOn = datetime.strptime(transaction["createOn"], "%Y-%m-%d %H:%M:%S")

        query = """
        INSERT INTO data (id, productID, productName, amount, customerName, status, transactionDate, createBy, createOn)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        values = (id, productID, productName, amount, customerName, status, transactionDate, createBy, createOn)

        try:
            cursor.execute(query, values)
            db.commit()
        except pymysql.MySQLError as e:
            print(f"Error inserting transaction {id}: {e}")

# Load JSON data
data = load_json(r"C:\LatihanReact\Technical-Test\viewData.json")

# Masukkan data status jika belum ada
insert_status()

# Masukkan data transaksi ke dalam tabel
insert_transactions(data)

# Tutup koneksi
cursor.close()
db.close()
