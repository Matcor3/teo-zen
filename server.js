// server.js
// Importiamo Express, un framework che ci semplifica la vita per creare server web
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Diciamo al server: "Tutti i file statici (immagini, css, html) sono nella cartella 'public'"
app.use(express.static(path.join(__dirname, 'public')));

// Avviamo il server
app.listen(PORT, () => {
    console.log(`🚀 Teo, il tuo universo è attivo su: http://localhost:${PORT}`);
});