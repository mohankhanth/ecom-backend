const Product = require('../models/product')
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const getAllProducts = (req, res) => {
  res.status(201).json({ 'msg' :'All products' })
    // try{
    //     const task = await Task.find({})
    //     res.status(201).json({ task })
    // } catch(error) {
    //     return res.status(400).json({ msg: error })
    // }
  }

  const createProduct = async (req, res) => {
    // res.status(201).json({ 'msg' :'Create products' })
      try{
        const result = await cloudinary.uploader.upload(req.file.path);
        const {name, price, Category} = req.body
        const fullData = {
          name, price, Category,productImage:result.secure_url,cloudinary_id: result.public_id
        }
        const catetory = await Product.create({...fullData})
        res.status(201).json({ catetory })
          // const task = await Task.find({})
          // res.status(201).json({ task })
      } catch(error) {
          return res.status(400).json({ msg: error })
      }
    }

  module.exports = {
    getAllProducts,
    createProduct,
    // getTask,
    // updateTask,
    // deleteTask,
  }