const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {generateToken} = require("../utils/generateToken")
const validateUser = require("../utils/validateUser")

module.exports.registerUser = async function (req, res){
    try {

        const {error} = validateUser(req.body);
        if(error) return res.status(400).send(error.details[0].message)
        
        let { fullname, email, password } = req.body;

        let user = await userModel.findOne({email: email})
        if(user) return res.status(401).send("You already have an account, please login")
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message)
                else {
                    let user = await userModel.create({
                        email: email,
                        password: hash,
                        fullname: fullname
                    })
                   let token = generateToken(user);
                   res.cookie("token", token)
                   res.redirect("/shop")
                }
            })
        })
        //     
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports.loginUser = async function(req,res){
    let {email, password} = req.body;
    let user = await userModel.findOne({email: email});

    if(!user) return res.status(401).send("Eamil or Password incorrect.")

    bcrypt.compare(password, user.password, function(err, result){
        if(result){
        let token = generateToken(user);
        res.cookie("token", token);
        res.redirect("/shop")
        }
        else {
            res.send("Incorrect email or password")
        }
    })
}

module.exports.logoutUser = async function(req, res){
     res.cookie("token", "");
     res.redirect("/");
}