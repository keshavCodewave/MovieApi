const express = require('express');
const router = express.Router()
const bcryptJs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../middlewares/validation')

// const { append } = require('express/lib/response');
// const user = require('../models/user');
const dbUser = require('../models/user');
router.use(express.json())


router.post('/register',registerValidation(), async(req,res)=>{
    try {

        const emailExist = await dbUser.findOne({email: req.body.email})
        if(emailExist){
            return res.status(401).json({ 'status': 'failure', statusCode: 401, message: 'Email already exist' })
        }
        const salt = await bcryptJs.genSalt(10)
        const hashedPassword = await bcryptJs.hash(req.body.password , salt)
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
            const savedUser = await dbUser.create(user);
            res.status(200).json({ 'status': 'success', statusCode: 200, response: savedUser })
        } catch (error) {
        res.send(error)
    }
})



router.post('/login', loginValidation(), async(req,res)=>{
    // try {

        const emailExist = await dbUser.findOne({email: req.body.email})
        console.log(22);
        if(!emailExist){
            return res.status(401).json({ 'status': 'failure', statusCode: 401, message: 'Email not found' })
        }

        const validPass = await bcryptJs.compare(req.body.password, emailExist.password)
        if(!validPass){
            return res.status(401).json({ 'status': 'failure', statusCode: 401, message: 'Passsword not found' })
        }

        const token = jwt.sign({_id:emailExist._id}, "Keshavguptaisawebdevloper")

        res.header('auth-token', token).send(token)

        res.send("logged in")
        // const salt = await bcryptJs.genSalt(10)
        // const hashedPassword = await bcryptJs.hash(req.body.password , salt)
        //     const user = {
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: hashedPassword
        //     }
        //     const savedUser = await dbUser.create(user);
        //     res.status(200).json({ 'status': 'success', statusCode: 200, response: savedUser })
        // } catch (error) {
        // res.send(error)
    // }
})

module.exports = router