const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const fetch = require("node-fetch");

router.get(
  "/suggestions/:latitude/:longitude",
  asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.params;
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term="donuts"&categories=breakfast&sort_by=distance&limit=12&latitude=${latitude}&longitude=${longitude}`,
      {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${process.env.YELP_KEY}`,
        },
      }
    );
    if (response.ok) {
      const { businesses } = await response.json();

      return res.json(businesses);
    } else {
      throw new Error("Failed to load 'Suggestions'");
    }
  })
);

router.get(
  "/results/:query/:latitude/:longitude",
  asyncHandler(async (req, res) => {
    const { query, latitude, longitude } = req.params;

    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term="${query}"&categories=breakfast&sort_by=distance&limit=12&latitude=${latitude}&longitude=${longitude}`,
      {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${process.env.YELP_KEY}`,
        },
      }
    );

    if (response.ok) {
      const { businesses } = await response.json();

      return res.json(businesses);
    } else {
      throw new Error("Failed to load 'Results'");
    }
  })
);

router.get(
  "/:businessId",
  asyncHandler(async (req, res) => {
    const { businessId } = req.params;

    try {
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
        return res.json({ business });
      }
    } catch (error) {
      throw new Error("Failed to load 'Business'");
    }
  })
);
module.exports = router;
