const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

const { Business } = require("../../db/models");
const businessMethods = require("../../db/methods_business");


router.post(
  "/",
  asyncHandler(async (req, res) => {
    const newBusiness = await Business.create({});
  })
);


module.exports = router;
