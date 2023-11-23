const pool = require('../../config/connection')
const updateCategory = async (req,res,next) => {

    const values = {...req.body,...req.params}
   

    const sql = 'UPDATE category SET name = :categoryName ,color = :categoryColor WHERE category.id = :id '

    try {
        const result = await pool.execute({sql,values})
        
        res.redirect('/config')
    
      
    } catch (error) {
        console.log(error)
        next(error)
    }
   
}

module.exports = updateCategory;