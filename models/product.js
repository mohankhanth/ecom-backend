const { boolean } = require('joi')
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [30, 'name can not be more than 30 characters'],
  },
  price: {
    type: Number,
    required: [true, 'must provide price']
  },
  discount: {
    type: Number,
    default: 0
  },
  productImage: {
    type: String,
    required: true
  },
  Category: {
    type: mongoose.Types.ObjectId,
    ref: 'category',
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Product', ProductSchema)