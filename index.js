/*const express=require('express');
const cors=require("cors");
const dbConnect=require('./db.js')

const PORT=process.env.PORT || 5050;
var app = express(); 

app.use(cors());
app.use(express.json())

dbConnect()

//Routes
app.get('/', (req, res) => { 
    res.send({
        message:"Welcome to e-commerce app"
    })
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})*/