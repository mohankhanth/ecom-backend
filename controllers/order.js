const Task = require('../models/order')

const getAllOrders = (req, res) => {
  res.status(201).json({ 'msg' :'All orders' })
    // try{
    //     const task = await Task.find({})
    //     res.status(201).json({ task })
    // } catch(error) {
    //     return res.status(400).json({ msg: error })
    // }
  }

  module.exports = {
    getAllOrders
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask,
  }