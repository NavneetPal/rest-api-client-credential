require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const authMiddleware = require('./auth');
const partModel=require('./models')['Part'];



app.use(bodyParser.json());
app.use(authMiddleware);




app.get('/parts',(req,res)=>{
    res.json({
        message:"Part page"
    })
})

app.post('/parts',async(req,res)=>{
    const part=await partModel.create(req.body);
    res.json({
        part
    })
})

const port=3000;
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})