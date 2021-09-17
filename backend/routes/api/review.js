const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require("../../db/models");
const { Business } = require("../../db/models");
const fetch = require("node-fetch");
const { businessesByYelpId } = require("./../../db/methods_business");

const router = express.Router();
router.get(
  "/yelp/:yelpAlias",
  asyncHandler(async (req, res) => {
    const { yelpAlias } = req.params;

    if (yelpAlias) {
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
        const { reviews } = await response.json();
        return res.json(reviews);
      }
    } else {
      throw new Error("Express: Resource Not Found");
    }
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
    const { review:{userId, businessId, answer, rating, draft}, business } = req.body;
    const businessExists = await Business.findOne({
      where: { yelpId: businessId },
    });
    if(!businessExists){
      await businessesByYelpId(business)
    }
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
