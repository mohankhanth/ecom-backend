const express = require('express')
const router = express.Router()
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const {
    getAllProducts,
    createProduct
  } = require('../controllers/product')

  router.route('/').get(getAllProducts).post( upload.single("image"), createProduct)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router