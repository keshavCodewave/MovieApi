const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const registerValidation = (data)=>{
    return [
        body('name').not().isEmpty(),
        body('email').not().isEmpty(),
        body('password').not().isEmpty()
    ]
}

const loginValidation = (data)=>{
    return [
        body('name').not().isEmpty(),
        body('email').not().isEmpty(),
        body('password').not().isEmpty()
    ]
}

const auth = (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send("Access denied")
    }
    try {
        const verified =  jwt.verify(token, "Keshavguptaisawebdevloper")
        req.user = verified
    } catch (error) {
        return res.status(400).send("Invalid Token denied")
    }

    next()
}



module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.auth = auth;