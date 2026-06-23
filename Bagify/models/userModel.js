const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,

    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }],
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    pictutre: String,
})


module.exports = mongoose.model("user", userSchema)