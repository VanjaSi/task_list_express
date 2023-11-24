const pool = require('../../config/connection')

const deleteCategory = async(req,res)=>{

    const values = req.params
    const query = ['DELETE FROM tasks WHERE category_id = :id', 'DELETE FROM category WHERE id =:id']

    try {

        query.forEach( async(sql) =>{
            await pool.execute({sql, values})

        })

        res.redirect(req.headers.referer)
        
    } catch (error) {
        
    }
}

module.exports= deleteCategory