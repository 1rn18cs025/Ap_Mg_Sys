require('dotenv').config();
const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next){
    const token = req.cookies.token;
    console.log("asasaa",req.cookies.token);
    if (!token) return res.status(401).send('Access denied.');
    
    try{
        const decoded =jwt.verify(token,process.env.PRIVATE_KEY)
        // console.log("hiiiiii");
        // req.user = decoded;
        if(!decoded) res.status(404).json({error: "invalid token"})
        
        next(); 
    }
    catch(ex){
        res.status(400).send('Invalid token.')
    }
}

module.exports = auth;