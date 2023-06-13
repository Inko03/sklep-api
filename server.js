const express = require('express')
const app = express()
const dotenv = require('dotenv')
const main = require('./routs/Products')
const cors = require('cors');
const mongoose = require('mongoose')
dotenv.config()
const port = process.env.PORT

mongoose.connect(process.env.BASE_URL).then(console.log('Connected')).catch((err)=>console.log(err))

app.use(cors({ origin: 'http://localhost:3000'}));
app.listen(port,()=>{
console.log(`Server working on port ${port}`)
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api',main)
