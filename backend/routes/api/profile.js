const express = require('express')
const asyncHandler = require("express-async-handler");
const router = express.Router();
const profileMethods = require('../../db/methods_profile')

router.get("/", asyncHandler(async(req,res)=>{

}))
module.exports = router;