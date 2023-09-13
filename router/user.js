const express = require('express')
const router = express.Router()

const {
    getAllUser,
    registerUser,
    loginUser,
    updateAuth,
    onlyAdmin
  } = require('../controllers/user')
  const {getSingleUserOrders} = require('../controllers/order')

  const {authenticationMiddleware, adminPermissions, onlyAdminMiddleware} = require('../middleware/authenticate')

  router.route('/').get(authenticationMiddleware,adminPermissions(), getAllUser).put(authenticationMiddleware, updateAuth)
  router.post('/register', registerUser)
  router.post('/login', loginUser)
  router.get('/:orderId/singleUserOrder',authenticationMiddleware, getSingleUserOrders)
  router.get('/is-admin', onlyAdmin)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router