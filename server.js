require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const socketServerRouter=require('./Router/socketServer');
const http=require('http');
const app = express();

const server = http.createServer(app);

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(fileUpload({
    useTempFiles:true
}))

app.use('/socketServer', socketServerRouter({
    server
}));

app.use('/api',require('./Router/authRouter'));
app.use('/api', require('./Router/brokerRouter'));
app.use('/api',require('./Router/upload'));
app.use('/api', require('./Router/clientRouter'));
app.use('/user',require('./Router/ContactRouter'));
app.use('/api',require('./Router/propertyRouter'));
app.use('/api',require('./Router/categoryRouter'));
app.use('/chat',require('./Router/chatRouter'));


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

// app.listen(PORT,()=>{
//     console.log('server is runing on port',PORT);
// });

server.listen(PORT,()=>{
    console.log('server is runing on port',PORT);
});
