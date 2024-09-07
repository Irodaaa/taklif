const express = require('express');
const { Invitation } = require('../models/User'); // Правильный импорт схемы Invitation
const router = express.Router();

// Создание нового приглашения
router.post('/', async (req, res) => {
  try {
    const newInvitation = new Invitation(req.body);
    await newInvitation.save();
    console.log('Сохраненное приглашение:', newInvitation); // Логируем сохраненное приглашение
    res.status(201).json(newInvitation);
  } catch (error) {
    console.error('Ошибка при создании приглашения:', error);
    res.status(400).json({ message: 'Ошибка при создании приглашения', error });
  }
});

// Получение приглашения по ID
router.get('/:id', async (req, res) => {
  try {
    const invitation = await Invitation.findById(req.params.id);
    if (!invitation) {
      return res.status(404).json({ message: 'Приглашение не найдено' });
    }
    res.json(invitation);
  } catch (error) {
    console.error('Ошибка при загрузке приглашения:', error);
    res.status(500).json({ message: 'Ошибка при загрузке приглашения', error });
  }
});

module.exports = router;
