const pool = require('../../config/connection')
const updateTask = async (req,res,next)=>{

    const values = {...req.params, ...req.body}

    const sql = 'UPDATE tasks SET task=:task, description = :description, deadline=:deadline, category_id=:categoryID, priority_id=:priorityID WHERE id=:id'

try {
    await pool.execute({sql,values})
    res.redirect('/task/all')
} catch (error) {
    next(error)
}


}
module.exports = updateTask