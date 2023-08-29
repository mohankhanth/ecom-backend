const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask
  } = require('../controllers/product')

  router.route('/').get(getAllProducts)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router