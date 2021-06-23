const express = require('express')
const asyncHandler = require("express-async-handler");
const router = express.Router();

const {Business} = require('../../db/models')
const businessMethods = require('../../db/methods_business')

router.get("/", asyncHandler(async(req,res)=>{
  const {businessId} = req.params
  const response = await Business.findByPk(businessId)
  if(response.ok){
    console.log('got it');
    return response.json()
  } else {
    console.error('Resource not found');
  }
}))

router.post('/', asyncHandler(async(req,res) => {

  const newBusiness = await Business.create({

  })



}))
module.exports = router;
