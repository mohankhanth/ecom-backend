const Task = require('../models/user')

const getAllUser = (req, res) => {
  res.status(201).json({ 'msg' :'All users' })
    // try{
    //     const task = await Task.find({})
    //     res.status(201).json({ task })
    // } catch(error) {
    //     return res.status(400).json({ msg: error })
    // }
  }

  module.exports = {
    getAllUser
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask,
  }