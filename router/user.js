const express = require('express')
const router = express.Router()

const {
    getAllUser,
    registerUser,
    loginUser,
    updateAuth
    // updateTask,
    // deleteTask
  } = require('../controllers/user')
  const {getSingleUserOrders} = require('../controllers/order')

  const {authenticationMiddleware, adminPermissions} = require('../middleware/authenticate')

  router.route('/').get(authenticationMiddleware,adminPermissions(), getAllUser).put(authenticationMiddleware, updateAuth)
  router.post('/register', registerUser)
  router.post('/login', loginUser)
  router.get('/:orderId/singleUserOrder', getSingleUserOrders)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router