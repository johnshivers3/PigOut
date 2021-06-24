const express = require('express')
const asyncHandler = require("express-async-handler");
const { Review } = require('../../db/models')
const { Business } = require('../../db/models')
// const reviewMethods = require('../../db/methods_review')
const router = express.Router();

router.post("/", asyncHandler(async(req,res)=>{
  const {userId, businessId, answer, rating, draft} = req.body
  const dbBusiness = await Business.findOne({where: {yelpId: businessId}})
  if(!dbBusiness) await Business.create({yelpId:businessId})
  const newReview = await Review.create({userId:+userId, businessId, rating:+rating, answer, draft})
  res.send('Success')
}))
module.exports = router;
