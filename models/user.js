const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    unique: [true, 'Email must be new'],
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
    trim: true,
  },
  phone: {
    type: String
  },
  active: {
    type: Boolean,
    required: true,
    default: false
  }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('User', UserSchema)