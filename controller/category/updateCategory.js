const pool = require('../../config/connection')
const updateCategory = async (req,res,next) => {

    const values = {...req.body,...req.params}
  

    const sql = 'UPDATE category c SET c.name = :categoryName ,c.color = :categoryColor WHERE c.id = :id '

    try {
        const result = await pool.execute({sql,values})
        
        res.redirect('/config')
    
      
    } catch (error) {
        console.log(error)
        next(error)
    }
   
}

module.exports = updateCategory;