const {Router} = require('express')
const router = Router()


router.get('/all', require('../controller/task/renderTaskPage'))
router.get('/add', require('../controller/task/renderAddTaskPage.js'))
router.get('/status', require('../controller/task/changeStatus.js')) 
router.get('/edit/:id', require('../controller/task/getTasksToEdit.js'))
router.get('/delete/:id', require('../controller/task/deleteTask.js'))


router.post('/add', require('../controller/task/addTask.js'))
router.post('/edit/:id', require('../controller/task/updateTask.js'))





module.exports = router
