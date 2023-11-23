const pool = require('../../config/connection')

const renderConfigPage = async (req,res)=>{

 let sqlCategory = `SELECT * FROM category`
 let sqlPriority = `SELECT * FROM priority`

    try {
        const [[category],[priority]] = await Promise.all([pool.execute({sql:sqlCategory}),pool.execute({sql:sqlPriority})])
        res.render('config',{category,priority})
        
    } catch (error) {
        console.log(error)
    }

    // res.render('config')
}

module.exports = renderConfigPage