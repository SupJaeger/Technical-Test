const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Membuat koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'technicaltest'
});

// Membuat server Express
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());

// Menyambungkan ke MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Menangani request GET ke /
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Menangani request GET ke /api/viewData
app.get('/api/viewData', (req, res) => {
  // Query untuk mendapatkan data dari MySQL
  connection.query('SELECT * FROM data', (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      return res.status(500).send('Error fetching data');
    }
    // Mengirimkan data yang diambil dari MySQL sebagai respons dalam format JSON
    res.json(results);
  });
});

// Menangani request POST ke /api/addData
app.post('/api/addData', (req, res) => {
  const { productID, productName, amount, customerName, status, transactionDate, createBy, createOn } = req.body;

  // Query untuk menambahkan data baru tanpa id (id akan otomatis diincrement oleh MySQL)
  const insertQuery = 'INSERT INTO data (productID, productName, amount, customerName, status, transactionDate, createBy, createOn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(insertQuery, [productID, productName, amount, customerName, status, transactionDate, createBy, createOn], (err, results) => {
    if (err) {
      console.error('Error adding data to MySQL:', err);
      return res.status(500).send('Error adding data');
    }
    res.status(201).send('Data added successfully');
  });
});

app.get('/api/editData/:id', (req, res) => {
  const { id } = req.params;
  console.log('Fetching data for ID:', id); // Debug log
  const query = 'SELECT * FROM data WHERE id = ?';

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      return res.status(500).send('Error fetching data');
    }
    if (results.length === 0) {
      return res.status(404).send('Data not found');
    }
    res.json(results[0]);
  });
});

// Menangani request PUT untuk update data
app.put('/api/editData/:id', (req, res) => {
  const { id } = req.params;
  const { productID, productName, amount, customerName, status, transactionDate, createBy, createOn } = req.body;
  const query = 'UPDATE data SET productID = ?, productName = ?, amount = ?, customerName = ?, status = ?, transactionDate = ?, createBy = ?, createOn = ? WHERE id = ?';
  connection.query(query, [productID, productName, amount, customerName, status, transactionDate, createBy, createOn, id], (err, results) => {
    if (err) {
      console.error('Error updating data in MySQL:', err);
      return res.status(500).send('Error updating data');
    }
    res.send('Data updated successfully');
  });
});

// Menangani request GET ke /api/groupData
app.get('/api/groupData', (req, res) => {
  const query = `
    SELECT 
      YEAR(transactionDate) AS year, 
      MONTH(transactionDate) AS month, 
      COUNT(*) AS count 
    FROM data 
    GROUP BY year, month
  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error grouping data from MySQL:', err);
      return res.status(500).send('Error grouping data');
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});