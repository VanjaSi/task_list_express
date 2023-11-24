const pool = require('../../config/connection')
const dayjs = require('dayjs')
const getTasksToEdit = async (req,res,next)=>{

   let values = {...req.params}
   
    const sqlTasks = 'SELECT * FROM tasks  WHERE id = :id' 
    const sqlCategories = 'SELECT * FROM category'
    const sqlPriorities = 'SELECT * FROM priority'

    
    try {
          // let [tasks] = await pool.execute({sql:sqlTasks},req.params.id)

          let [[tasks],[categories],[priorities]] = await Promise.all([pool.execute({sql:sqlTasks,values}), pool.execute({sql:sqlCategories ,values}), pool.execute({sql:sqlPriorities ,values})])
console.log(tasks)
        res.render('editTaskPage',{tasks,categories,priorities, dayjs})
    } catch (error) {
        next(error)
    }
}
module.exports = getTasksToEdit