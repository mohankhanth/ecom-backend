const Category = require('../models/category')

const getAllCategory = (req, res) => {
  res.status(201).json({ 'msg' :'All category' })
    // try{
    //     const task = await Task.find({})
    //     res.status(201).json({ task })
    // } catch(error) {
    //     return res.status(400).json({ msg: error })
    // }
  }

  const createCategory = async (req, res) => {
    
      try{
          const catetory = await Category.create({...req.body})
          res.status(201).json({ catetory })
      } catch(error) {
          return res.status(400).json({ msg: error })
      }
    }

  module.exports = {
    getAllCategory,
    createCategory,
    // getTask,
    // updateTask,
    // deleteTask,
  }