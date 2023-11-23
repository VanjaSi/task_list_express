
const pool = require('../../config/connection')

const renderTaskPage = async (req,res,next)=>{
    const sql = 'SELECT t.* , c.name AS categoryName, c.color AS categoryColor, p.name AS priorityName, p.color AS priorityColor FROM tasks t '+
                'JOIN category c ON c.id = t.category_id '+
                'JOIN priority p ON p.id = t.priority_id ' +
                'ORDER BY t.deadline DESC'
    try {
        let [tasks] = await pool.execute({sql})
        // console.log(tasks)
        res.render('allTasks',{tasks})
    } catch (error) {
        next(error)
    }
}

module.exports = renderTaskPage