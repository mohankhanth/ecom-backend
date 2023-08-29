const Task = require('../models/category')

const getAllCategory = (req, res) => {
  res.status(201).json({ 'msg' :'All category' })
    // try{
    //     const task = await Task.find({})
    //     res.status(201).json({ task })
    // } catch(error) {
    //     return res.status(400).json({ msg: error })
    // }
  }

  module.exports = {
    getAllCategory
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask,
  }