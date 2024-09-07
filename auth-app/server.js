const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');  // Подключаем body-parser

const app = express();

// Настройка body-parser для увеличения лимита размера тела
app.use(bodyParser.json({ limit: '10mb' }));  // Увеличиваем до 10MB (или больше, если нужно)
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',  // Указываем конкретный origin (React приложение)
  credentials: true                 // Включаем поддержку авторизации через куки
}));

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB подключен');
}).catch((error) => {
  console.log('Ошибка подключения к MongoDB:', error.message);
});

// Проверочный маршрут
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Подключаем маршруты приглашений
app.use('/api/invitations', require('./routes/invitationRoutes'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
