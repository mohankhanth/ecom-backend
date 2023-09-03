const { boolean } = require('joi')
const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: [true, 'Price should not be empty'],
      },
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: [true, 'Product should not be empty'],
      },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, 'User should not be empty'],
      },
      address: {
        type: String,
        required: [true, 'Quantity should not be empty'],
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity should not be empty'],
      },
      payment_method: {
        type: String,
        required: true,
        default: "COD",
      },
      status: {
        type: Boolean,
        default: false,
      }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Order', OrderSchema)