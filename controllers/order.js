const mongoose = require("mongoose");
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

  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let address = req.body.address;

  console.log(firstname, lastname, address, 'address')

  if (!firstname || !lastname || !address) {
    return res.status(400).json({ message: "firstName , lastName , address Required..", } );
  }


  let carts = JSON.parse(JSON.stringify(req.body.products));
  if (!carts) {
    res.json({
      error: {
        message: "Products Required..",
      },
    });
    return;
  }

  let orders = [];
  for (let i = 0; i < carts.length; i++) {
    orders.push(createOrder(req, carts[i], firstname, lastname, address));
  }


  const newOrder = await Order.create(orders)
  console.log(newOrder);
  res.status(201).json({ message:"Order was created", orders: newOrder })
  }

  function createOrder(req, productInfo, firstName, lastName, address) {
    return new Order({
      _id:new mongoose.Types.ObjectId(),
      product: productInfo.product,
      quantity: productInfo.quantity,
      price: productInfo.price,
      user: req.user.userId,
      firstname: firstName,
      lastname: lastName,
      address: address,
    });
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