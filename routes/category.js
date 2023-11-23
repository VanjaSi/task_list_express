const {Router} = require('express')
const router = Router()

// GET
router.get('/', require('../controller/category/renderCategoryPage'))
router.get('/add' , require('../controller/category/renderAddCategoryPage'))
router.get('/delete/:id', require('../controller/category/deleteCategory'))
router.get('/edit/:id', require('../controller/category/renderCategoryEditPage'))

//POST
router.post('/add' , require('../controller/category/addCategory'))
router.post('/edit/:id', require('../controller/category/updateCategory'))


// router.get('/edit')



module.exports = router