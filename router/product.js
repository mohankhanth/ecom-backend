const express = require('express')
const router = express.Router()
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const {
    getAllProducts,
    createProduct,
    getSingleProducts
  } = require('../controllers/product')

  router.route('/').get(getAllProducts).post( upload.single("image"), createProduct)
  router.route('/:id').get(getSingleProducts)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getSingleProducts).patch(updateTask).delete(deleteTask)



module.exports = router