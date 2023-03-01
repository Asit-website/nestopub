require('dotenv').config();
require("./db/conn");
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socketServerRouter = require('./Router/socketServer');
const http = require('http');
const app = express();
const bodyParser=require('body-parser');

const server = http.createServer(app);

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({ origin: true, credentials: true }));

app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.use('/socketServer', socketServerRouter({
    server
}));

app.use('/api', require('./Router/authRouter'));
app.use('/api', require('./Router/brokerRouter'));
app.use('/api', require('./Router/upload'));
app.use('/api', require('./Router/clientRouter'));
app.use('/user', require('./Router/ContactRouter'));
app.use('/api', require('./Router/propertyRouter'));
app.use('/api', require('./Router/categoryRouter'));
app.use('/chat', require('./Router/chatRouter'));
app.use("/api",require('./Router/builderRouter'));
app.use("/api",require('./Router/adminRouter'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log('server is runing on port', PORT);
});
module.exports = app;
