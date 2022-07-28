const {Schema, model} = require("mongoose");
const Joi = require("joi");

const codeRegexp = /^[0-9]{9}$/;

const formSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
  
    code: {
        type: String,
        required: true,
        unique: true,
        match: codeRegexp
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required(),
    code: Joi.string().pattern(codeRegexp)
});


const Form = model("form", formSchema);

module.exports = {
    Form,
    joiSchema,
}