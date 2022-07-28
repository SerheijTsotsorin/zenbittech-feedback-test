const express = require("express");

const {validation, ctrlWrapper} = require("../../middlewares/middlewares");
const {joiSchema} = require("../../models/models");
const {products: ctrl} = require("../../controllers")

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.add));

module.exports = router;