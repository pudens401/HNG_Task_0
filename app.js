const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({limit:'100mb',extended:true}))
app.use(cors({credentials:true}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    try {
        const email = "iradukunda401@gmail.com"
        const current_datetime = new Date().toISOString();
        const github_url = "https://github.com/pudens401/HNG_Task_0"

        return res.status(200).json({
            "email":email,
            "current_datetime": current_datetime,
            "github_url":github_url

        })
    } catch (error) {
        return res.status(200).json({error:error.message})
    }
})

const PORT = process.env.PORT?process.env.PORT:8000
app.listen(PORT,()=>{
    console.log(`Connected to server on ${PORT}`)
})


