const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [30, 'name can not be more than 30 characters'],
  }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Category', CategorySchema)