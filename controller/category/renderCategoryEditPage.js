
const pool = require('../../config/connection')

const renderCategoryEditPage = async(req,res,next)=>{

    const values = {...req.params}
    const sql = "SELECT category.id,category.name,category.color FROM category WHERE id = :id"
   
    try {
        let [category] = await pool.execute({sql,values})
console.log(category)
        res.render('editCategoryPage', {category:category[0]})

    } catch (error) {
        next(error)
    }
}

module.exports = renderCategoryEditPage