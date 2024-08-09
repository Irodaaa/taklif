const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/wedding-invitations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Модель приглашения
const invitationSchema = new mongoose.Schema({
  title: String,
  image: String,
  newPrice: String,
  oldPrice: String,
  details: {
    date: String,
    time: String,
    location: String,
    description: String,
    music: String,
  },
});

const Invitation = mongoose.model('Invitation', invitationSchema);

// Маршруты API
app.get('/api/invitations', async (req, res) => {
  const invitations = await Invitation.find();
  res.json(invitations);
});

app.get('/api/invitations/:id', async (req, res) => {
  const invitation = await Invitation.findById(req.params.id);
  res.json(invitation);
});

app.post('/api/invitations', async (req, res) => {
  const newInvitation = new Invitation(req.body);
  await newInvitation.save();
  res.json(newInvitation);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
