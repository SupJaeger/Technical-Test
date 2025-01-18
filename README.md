# Aplikasi Vite + React dengan MySQL Backend

Panduan ini menjelaskan cara menyiapkan aplikasi ini dan database untuk menjalankannya di lokal Anda.

## Langkah-langkah

### 1. Menyiapkan Database
Sebelum menjalankan aplikasi, pastikan Anda memiliki MySQL yang aktif dan server Apache berjalan. Untuk itu, ikuti langkah-langkah berikut:

- **Aktifkan XAMPP**:
  1. Buka **XAMPP Control Panel**.
  2. Klik **Start** pada modul **Apache** dan **MySQL** untuk memulai server web dan database MySQL.

- **Import Database**:
  1. Setelah XAMPP aktif, pastikan Anda masuk ke folder `data` yang berisi file database.
  2. Jalankan perintah berikut untuk berpindah ke folder `data`:
     ```bash
     cd data
     ```

- **Menjalankan Database**:
  1. Di dalam folder `data`, jalankan perintah untuk mengaktifkan server Node.js dan menghubungkan aplikasi ke database:
     ```bash
     node server.js
     ```

### 2. Menjalankan Aplikasi Vite + React

Setelah server aktif, Anda dapat menjalankan aplikasi dengan langkah-langkah berikut:

- **Install Dependencies**:
  Pastikan Anda berada di folder root projek dan menjalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
  ```bash
  npm install

- **Start Aplikasi**:
  Setelah itu, jalankan aplikasi Vite dengan perintah:
  ```bash
  npm run dev
