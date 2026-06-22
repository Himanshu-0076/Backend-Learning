const Joi = require("joi");

function validateUser (data){
    const Schema = Joi.object({
        fullname: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().min(3).required()
    })

    return Schema.validate(data);
}

module.exports = validateUser;