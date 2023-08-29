const express = require('express')
const router = express.Router()

const {
    getAllCategory,
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask
  } = require('../controllers/category')

  router.route('/').get(getAllCategory)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router