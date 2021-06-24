const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require("../../db/models");
const { Business } = require("../../db/models");
// const reviewMethods = require('../../db/methods_review')
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, businessId } = req.body;
    const review = Review.findOne({ where: { userId, businessId } });

    return review;
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, businessId, answer, rating, draft } = req.body;
    await Business.findOrCreate({
      where: { yelpId: businessId },
    });

    const newReview = await Review.create({
      userId: +userId,
      businessId,
      rating: +rating,
      answer,
      draft,
    });
    return newReview;
  })
);
router.put(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, businessId, answer, rating, draft } = req.body;

    const newReview = await Review.update(
      { rating: +rating, answer, draft },
      { where: { userId: +userId, businessId } }
    );
    return newReview
  })
);
module.exports = router;
