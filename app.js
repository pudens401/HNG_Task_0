const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({limit:'100mb',extended:true}))
app.use(cors({credentials:true}))
app.use(bodyParser.json())


app.get('/getInfo',(req,res)=>{
    try {
        const email = "iradukunda401@gmail.com"
        const current_datetime = new Date().toISOString();
        const 
        return res.status(200).json({

        })
    } catch (error) {
        
    }
})


