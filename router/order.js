const express = require('express')
const router = express.Router()

const {
    getAllOrders,
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask
  } = require('../controllers/order')

  router.route('/').get(getAllOrders)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router