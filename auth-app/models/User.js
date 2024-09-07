const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Схема пользователя
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

// Схема приглашения
const InvitationSchema = new mongoose.Schema({
  brideName: { type: String, required: true },
  groomName: { type: String, required: true },
  weddingDate: { type: String, required: true },
  weddingTime: { type: String, required: true },
  weddingLocation: { type: String, required: true },
  customText: { type: String, required: true },
  selectedPhoto: { type: String, required: true },
  theme: { type: String, required: true },
});

const Invitation = mongoose.model('Invitation', InvitationSchema);

module.exports = { User, Invitation };
