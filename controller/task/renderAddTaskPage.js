const pool = require('../../config/connection')

const renderAddTaskPage = async (req,res,next) =>{

    let sql = {
        categories: 'SELECT * FROM category',
        priorities : 'SELECT * FROM priority'
    }
    

    let sqlCategory = 'SELECT * FROM category'
    let sqlPriority = 'SELECT * FROM priority'

    let sentData={}
    try {
//         for (const key in sql) {
//          let [result] = await pool.execute({sql : sql[key]})
//          sentData[key] = result
//         }
//         res.render('addTaskPage',{sentData})
//          console.log(sentData)

let [[category],[priority]] = await Promise.all([pool.execute({sql:sqlCategory}), pool.execute({sql:sqlPriority})])
res.render('addTaskPage',{categories: category, priorities:priority})
// console.log({categories: category, priorities:priority})

    } catch (error) {
        next(error)
    }


}

module.exports = renderAddTaskPage