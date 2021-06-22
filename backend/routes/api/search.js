const express = require('express')
const asyncHandler = require("express-async-handler");
const router = express.Router();
const searchMethods = require('../../db/methods_search')

router.get("/", asyncHandler(async(req,res)=>{

}))
module.exports = router;
