const express = require('express')
const router = express.Router()

const {
    getAllUser,
    // createTask,
    // getTask,
    // updateTask,
    // deleteTask
  } = require('../controllers/user')

  router.route('/').get(getAllUser)
  
  // router.route('/').get(getAllTasks).post(createTask)
  // router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router