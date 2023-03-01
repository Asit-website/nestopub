const mongoose = require("mongoose");

const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successfull");
}).catch((err) => {
    console.log(err);
    console.log("connection is not successfull");
});

module.exports=mongoose;
