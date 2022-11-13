require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(fileUpload({
    useTempFiles:true
}))

app.use('/api',require('./Router/brokerRouter'));
app.use('/api',require('./Router/upload'));




// app.get('/',(req,res) =>{
//    res.send("hi i am kushel");
// })

const URI = process.env.MONGODB_URL;
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("connection is not successfull");
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('server is runing on port',PORT);
})


