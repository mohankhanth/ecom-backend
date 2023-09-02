const Category = require('../models/category')

const getAllCategory = async (req, res) => {
    try{
        const category = await Category.find({})
        res.status(201).json({ category })
    } catch(error) {
        return res.status(400).json({ msg: error })
    }
  }

  const createCategory = async (req, res) => {
    
      try{
          const catetory = await Category.create({...req.body})
          res.status(201).json({ catetory })
      } catch(error) {
          return res.status(400).json({ msg: error })
      }
    }

    const getSingleCategory = async (req, res) => {
      try{
        const {id} = req.params
        console.log(id)
          const category = await Category.find({_id:id})
          res.status(201).json({ category })
      } catch(error) {
          return res.status(400).json({ msg: error })
      }
    }

  module.exports = {
    getAllCategory,
    createCategory,
    getSingleCategory
  }