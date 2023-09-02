const Product = require('../models/product')
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const getAllProducts = async (req, res) => {
    try{
        const product = await Product.find({})
        res.status(201).json({ product })
    } catch(error) {
        return res.status(400).json({ msg: error })
    }
  }

  const createProduct = async (req, res) => {
      try{
        const result = await cloudinary.uploader.upload(req.file.path);
        const {name, price, Category} = req.body
        const fullData = {
          name, price, Category,productImage:result.secure_url,cloudinary_id: result.public_id
        }
        const catetory = await Product.create({...fullData})
        res.status(201).json({ catetory })
      } catch(error) {
          return res.status(400).json({ msg: error })
      }
    }

    const getSingleProducts = async (req, res) => {
      try{
        const {id} = req.params
        console.log(id)
          const product = await Product.find({_id:id})
          res.status(201).json({ product })
      } catch(error) {
          return res.status(400).json({ msg: error })
      }
    }

  module.exports = {
    getAllProducts,
    createProduct,
    getSingleProducts
  }