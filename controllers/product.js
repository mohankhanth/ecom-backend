const Product = require('../models/product')
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const getAllProducts = async (req, res) => {
  try{
    console.log('Mohan swamy',req.query)
      const categoryId = req.query.categoryId
      const isQuery = categoryId ? {Category:categoryId} : {}
      const product = await Product.find(isQuery)
      res.status(201).json({count:product.length, product })
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

    const deleteProducts = async (req, res) => {
      try {
        // Find user by id
        let product = await Product.findById(req.params.id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(product.cloudinary_id);
        // Delete user from db
        await Product.findOneAndDelete(req.params.id);
        res.json(product);
      } catch (err) {
        console.log(err);
      }
    }

    const updateProducts = async (req, res) => {
      try {
        let product = await Product.findById(req.params.id);
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(product.cloudinary_id);
        // Upload image to cloudinary
        let result;
        if (req.file) {
          result = await cloudinary.uploader.upload(req.file.path);
        }
        console.log('result', result)
        const data = {
          name: req.body.name || product.name,
          price: req.body.price || product.price,
          discount: req.body.discount || product.discount,
          active: req.body.active || product.active,
          Category: req.body.Category || product.Category,
          productImage: result?.secure_url || product.productImage,
          cloudinary_id: result?.public_id || product.cloudinary_id,
        };
        product = await Product.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
        res.json({message:'Updated successfully', data});
      } catch (err) {
        console.log(err);
      }
    }

  module.exports = {
    getAllProducts,
    createProduct,
    getSingleProducts,
    deleteProducts,
    updateProducts
  }