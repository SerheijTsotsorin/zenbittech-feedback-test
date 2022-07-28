const {Form} = require("../models/models");

const add = async (req, res) => {
    const result = await Form.create(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
}



module.exports = {add};