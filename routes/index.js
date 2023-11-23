const {Router} = require('express')
const { route } = require('./task')
const router = Router()

//home
router.get('/', (req,res)=>{
    res.render('home')
})
// "/task"
router.use('/task', require('./task'))

// "/category"
router.use('/category', require('./category'))

// "/priority"
router.use('/priority', require('./priority'))

// "/config"
router.use('/config', require('./config'))

module.exports = router