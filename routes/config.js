const {Router} = require('express')
const router = Router()

router.get('/', require('../controller/config/renderConfigPage'))

module.exports = router