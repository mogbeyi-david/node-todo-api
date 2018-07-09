const mongoose = require('mongoose');

const User = mongoose.model('users', {
  username: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

module.exports = {User};