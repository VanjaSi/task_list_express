const express = require('express')
const app = express()
const path = require('path')
const {PORT} = require('./config/config')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font/')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended:true}))
app.use('/', require('./routes'))


app.listen(PORT, (err)=>{
   if(err) console.log(err)

   console.log('Server running on port: ' + PORT)
})