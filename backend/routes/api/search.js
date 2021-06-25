const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const fetch = require("node-fetch");



router.get(
  "/suggestions/:latitude/:longitude",
  asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.params;

    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=donuts&latitude=${latitude}&longitude=${longitude}`,
      {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${process.env.YELP_KEY}`,
        },
      }
    );
    if (response.ok) {
      const list = await response.json();
      return res.json({list})
    } else {
      throw new Error("Failed to load 'Suggestions'");
    }
  })
);
router.get(
  "/:businessId",
  asyncHandler(async (req, res) => {
    const { businessId } = req.params;

    const response = await fetch(
      `https://api.yelp.com/v3/businesses/${businessId}`,
      {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${process.env.YELP_KEY}`,
        },
      }
    );
    if (response.ok) {
      const business = await response.json();
      return res.json({business})
    } else {
      throw new Error("Failed to load 'Business'");
    }
  })
);
module.exports = router;
