const express = require('express')
const asyncHandler = require("express-async-handler");
const router = express.Router();
const businessMethods = require('../../db/methods_business')

router.get("/", asyncHandler(async(req,res)=>{

}))
module.exports = router;
