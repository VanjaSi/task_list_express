const {Router} = require('express')
const router = Router()


router.get('/all', require('../controller/task/renderTaskPage'))
router.get('/add', require('../controller/task/renderAddTaskPage.js'))
router.get('/status', require('../controller/task/changeStatus.js'))

router.post('/add', require('../controller/task/addTask.js'))



module.exports = router
