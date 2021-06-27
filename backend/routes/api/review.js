const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require("../../db/models");
const { Business } = require("../../db/models");
const fetch = require("node-fetch");

const router = express.Router();
router.get(
  "/yelp/:yelpAlias",
  asyncHandler(async (req, res) => {
    const { yelpAlias } = req.params;
    console.log();
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/${yelpAlias}/reviews`,
      {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${process.env.YELP_KEY}`,
        },
      }
    );
    if (response.ok) {

      return res.json(response);
    }
    throw new Error("Express: Resource Not Found");
  })
);
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const userId = req.headers.userid;
    const businessId = req.headers.businessid;
    const review = await Review.findOne({
      where: { userId: +userId, businessId },
    });
    return res.json({ review });
  })
);
router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const userId = req.headers.userid;
    const businessId = req.headers.businessid;
    await Review.destroy({
      where: { userId: +userId, businessId },
    });
    return res.json({ message: "Success" });
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
    return newReview;
  })
);
module.exports = router;
