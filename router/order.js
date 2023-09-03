const express = require('express')
const router = express.Router()

const {authenticationMiddleware, onlyAdminMiddleware} = require('../middleware/authenticate')
const {
    getAllOrders,
    createOrders,
    deleteOrders,
    // updateTask,
    // deleteTask
  } = require('../controllers/order')

  router.route('/').get(onlyAdminMiddleware, getAllOrders).post(createOrders)
  router.delete('/:orderId', deleteOrders)
  
  // router.route('/').get(getAllTasks).post(createOrders)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router