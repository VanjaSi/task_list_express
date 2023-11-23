const pool = require('../../config/connection')

const deleteCategory = async(req,res)=>{

    const values = req.params
    const sql = 'DELETE FROM category WHERE id = :id'

    try {
       let [result] =  await pool.execute({sql, values})
console.log(result)
        res.redirect('/config')
        
    } catch (error) {
        
    }
}

module.exports= deleteCategory