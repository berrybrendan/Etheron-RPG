const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// define the User model schema
const CharacterSchema = new mongoose.Schema({
  name: String,
  type: String,
  level: Number,
  silver: Number,
  health: Number,
  strength: Number,
  intel: Number,
  speed: Number,
  defense: Number,
  summoner: { type: Schema.Types.ObjectId, ref: 'User' }
});



module.exports = mongoose.model('Character', CharacterSchema);
