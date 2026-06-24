const express = require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

router.get("/", (req,res)=> {
    let error = req.flash("error")
    res.render("index", {error, loggedin: false})
})

router.get("/shop",isLoggedin, async(req,res)=> {
    let products = await productModel.find()
    let success = req.flash("success")
    res.render("shop", {products, success})
})

router.get("/cart",isLoggedin, async (req,res)=> {
    let cartItems = await userModel.find()
    let user = await userModel.findOne({email: req.user.email}).populate("cart")
    res.render("cart", {user})
})

router.get("/addtocart/:productid", isLoggedin, async(req,res)=> {
    let user = await userModel.findOne({email: req.user.email});
    user.cart.push(req.params.productid)
    await user.save()
    req.flash("success", "Added to cart")
    res.redirect("/shop")
})

router.get("/removeCart/:id",isLoggedin, async(req,res)=>{
    const itemIdToRemove = req.params.id; 
    const loggedInUserId = req.user._id; 
    
    await userModel.findOneAndUpdate(
        loggedInUserId,
        {$pull: {cart: {_id: itemIdToRemove}}}
    );

    res.redirect("/cart");
})

router.get("/admin",(req,res)=> {
    res.render('admin')
})

router.get("/discountProduct",async(req,res)=>{
    let product = await productModel.find()
    
})

module.exports = router