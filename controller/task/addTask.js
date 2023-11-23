
const pool = require('../../config/connection')

const addTask = async (req,res,next)=>{

    const values = {...req.body}
    const sql = 'INSERT INTO tasks (task,description,deadline,priority_id,category_id) VALUES(:task,:description,:deadline,:priorityID, :categoryID)'

    try {
        await pool.execute({sql,values})
        res.redirect('/')
    } catch (error) {
        next(error)
    }
}

module.exports = addTask