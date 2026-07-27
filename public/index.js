const express = require('express');
const path = require('path');
const app = express();

// Gunakan process.cwd() agar jalan di Vercel dan lokal
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Kalau akses halaman lain, tetap arahkan ke index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('✅ Server jalan di port ' + PORT);
});

// Penting untuk Vercel!
module.exports = app;