const express = require('express')
const router = express.Router()

const {authenticationMiddleware, onlyAdminMiddleware} = require('../middleware/authenticate')
const {
    getAllOrders,
    createOrders,
    deleteOrders,
    updateOrders
  } = require('../controllers/order')

  router.route('/').get(onlyAdminMiddleware, getAllOrders).post(createOrders)
  router.route('/:orderId').delete(onlyAdminMiddleware, deleteOrders).put(updateOrders)
  
  // router.route('/').get(getAllTasks).post(createOrders)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router