//povezati se sa serverom i kreirati novi row sa tabelom
const pool = require('../../config/connection')

const addCategory = async (req,res,next)=>{
    
    const values = {...req.body}

    const sql = `INSERT INTO category (name,color) VALUES(:categoryName, :categoryColor)`
    
    try {

       await pool.execute({sql,values})
        res.redirect('/config')
        
        
    } catch (error) {
        next(error)
    }

}

module.exports = addCategory


