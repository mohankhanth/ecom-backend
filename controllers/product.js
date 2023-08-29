const Task = require('../models/product')

const getAllProducts = (req, res) => {
  res.status(201).json({ 'msg' :'All products' })
    // try{
    //     const task = await Task.find({})
    //     res.status(201).json({ task })
    // } catch(error) {
    //     return res.status(400).json({ msg: error })
    // }
  }

  module.exports = {
    getAllProducts
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask,
  }