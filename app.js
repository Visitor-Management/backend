const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    res.send('hii harshal')
})

app.listen(8000)