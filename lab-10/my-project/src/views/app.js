const express = require('express');
const path = require('path');

const app = express();

// Налаштування Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views')); // Виправлено

// Маршрути
app.get('/', (req, res) => {
    res.render('index'); // рендеринг index.pug
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
