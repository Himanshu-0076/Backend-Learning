const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: {
        type:String,
    },
    password: {
        type:String,
    },
    cart: {
        type: Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    pictutre: String,
    gstin: String,
})


module.exports = mongoose.model("owner", ownerSchema)