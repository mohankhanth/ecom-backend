const express = require('express')
const router = express.Router()
const {authenticationMiddleware, adminPermissions, onlyAdminMiddleware} = require('../middleware/authenticate')
const {
    getAllCategory,
    createCategory,
    // getTask,
    // updateTask,
    // deleteTask
  } = require('../controllers/category')


  router.route('/').get(getAllCategory).post(onlyAdminMiddleware, createCategory)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router