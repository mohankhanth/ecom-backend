const express = require('express')
const router = express.Router()
const {authenticationMiddleware, onlyAdminMiddleware} = require('../middleware/authenticate')
const {
    getAllCategory,
    createCategory,
    getSingleCategory,
    // getProductByCategory
    // updateTask,
    // deleteTask
  } = require('../controllers/category')


  router.route('/').get(getAllCategory).post(onlyAdminMiddleware, createCategory)
  // router.get('/getproductbycategory', getProductByCategory)
  router.route('/:id').get(getSingleCategory)

  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router