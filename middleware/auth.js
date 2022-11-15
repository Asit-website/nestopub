const jwt = require('jsonwebtoken');
// auth mai ham access token ko bhej rahe hote hai 
const auth = (req, res, next) =>{
    try {
        const token = req.header("Authorization"); // yaha sara authroziation hota hai
        if(!token) return res.status(400).json({msg: "Invalid Authentication"})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: "Invalid Authentication"})
            req.user = user; // getng the user after that start the next method
            next();
        })
    } 
    
    catch (err) {
        return res.status(500).json({msg: err.message});
    }
}


module.exports = auth;