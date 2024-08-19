require('dotenv').config(); // Это загружает переменные окружения из .env файла

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/auth');

const app = express();

app.use(express.json());

// Настройка CORS для разрешения доступа с любых источников
app.use(cors({
  origin: '*', // Разрешаем доступ с любых доменов. Можно указать конкретный домен, если это необходимо.
  methods: 'GET,POST,PUT,DELETE', // Разрешенные методы
  allowedHeaders: 'Content-Type,Authorization', // Разрешенные заголовки
}));

const mongoUri = process.env.MONGO_URI; // Убедитесь, что эта строка правильно загружена

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB подключен');
}).catch((error) => {
  console.log('Ошибка подключения к MongoDB:', error.message);
});

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
