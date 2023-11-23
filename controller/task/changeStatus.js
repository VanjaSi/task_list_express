
const pool = require('../../config/connection')

const changeStatus = async (req,res,next)=>{
  
    let done = req.query.done
    let id = parseInt(req.query.id)


    if(done === "true"){
        done = 1
    }else{ done = 0}

    let values = {done,id}

    console.log(values)

    let sql = 'UPDATE tasks t SET t.completed = :done WHERE t.id = :id'

    try {
       let [result] =  await pool.execute({sql,values})
    console.log(result)
        res.redirect('/task/all')
    } catch (error) {
        console.log(error)
        next(error)
    }

  

}
module.exports = changeStatus