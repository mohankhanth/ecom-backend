const Order = require('../models/order')
const Product = require('../models/product')

const getAllOrders = async (req, res) => {
  // res.status(201).json({ 'msg' :'All orders' })
    try{
        const order = await Order.find({}).populate([
          {
            path: 'product',
            populate: [
              {path: 'Category'}
            ]
          },
          {path: 'user', select: '-password'}
        ])
        res.status(201).json({ order })
    } catch(error) {
        return res.status(400).json({ msg: error })
    }
  }

const createOrders = async (req, res) => {
  try{
    const {orders} = req.body
    if (!orders || orders.length < 1) {
      return res.status(400).json({msg:'No cart items provided'});
    }

    for (index in orders) {
      const productId = await Product.findOne({ _id: orders[index].product });
      console.log('productId', productId)
      if (!productId) {
        return res.status(400).json({msg:`No product with id : ${orders[index].product}`});
      }
      const { price } = productId;
      orders[index].price = price
    }
    const newOrder = await Order.create(orders)
    res.status(201).json({ msg: newOrder })

    console.log('orders', newOrder)
    } catch(error) {
        return res.status(400).json({ msg: error.message })
    }
  }

const getSingleUserOrders = async (req, res) => {
  // res.status(201).json({ 'msg' : req.params.orderId })
    try{
        const order = await Order.find({user: req.params.orderId}).populate([
          {
            path: 'product',
            populate: [
              {path: 'Category', select: '-created_at -updated_at'}
            ]
          }
        ])
        res.status(201).json({ order })
    } catch(error) {
        return res.status(400).json({ msg: error.message })
    }
  }

const deleteOrders = async (req, res) => {
  // res.status(201).json({ 'msg' :'All orders' })
    try{
      const {orderId} = req.params
      const order = await Order.deleteOne({_id: orderId})
      if (!order) {
        return res.status(400).json({msg:`No product with id : ${orderId}`});
      }
        res.status(201).json({ order })
    } catch(error) {
        return res.status(400).json({ msg: error.message })
    }
  }

const updateOrders = async (req, res) => {
  // res.status(201).json({ 'msg' :'All orders' })
    try{
      const {orderId} = req.params
      const order = await Order.findOneAndUpdate({ _id: orderId }, req.body, {
        new: true,
        runValidators: true,
      })
      if (!order) {
        return res.status(400).json({msg:`No product with id : ${orderId}`});
      }
        res.status(201).json({ order })
    } catch(error) {
        return res.status(400).json({ msg: error.message })
    }
  }

  module.exports = {
    getAllOrders,
    createOrders,
    getSingleUserOrders,
    deleteOrders,
    updateOrders
  }