const pool = require('../../config/connection')

const deleteTask = async (req,res,next)=>{

    const values = {...req.params}
    const sql = 'DELETE FROM tasks WHERE id = :id'
console.log(values)
    try {
        await pool.execute({sql,values})
        res.redirect('/task/all')
    } catch (error) {
        next(error)
    }

}
module.exports = deleteTask