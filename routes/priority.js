const {Router, request} = require('express')
const renderPriorityPage = require('../controller/priority/renderPriorityPage')
const router = Router()

router.get('/', require('../controller/priority/renderPriorityPage'))

module.exports = router
