const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const Review = require("../../db/models");
const CheckIns = require("../../db/models");
const Collection = require("../../db/models");
const SavedBusiness = require("../../db/models");

router.get(
  "/reviews/:userId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await Review.findAll({ where: { userId } });
      if (response.ok) {
        res.json(response);
      }
    } catch (error) {
      throw new Error("Reviews not found");
    }
  })
);

router.get(
  "/checkins/:userId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await CheckIns.findAll({ where: { userId } });
      if (response.ok) {
        res.json(response);
      }
    } catch (error) {
      throw new Error("Check-Ins not found");
    }
  })
);
router.post(
  "/checkins/:userId/:businessId",
  asyncHandler(async (req, res) => {
    const { userId, businessId } = req.params;

    try {
      const response = await CheckIns.create({ userId, businessId });
      if (response.ok) {
        res.json(response);
      }
    } catch (error) {
      throw new Error("Check-Ins not found");
    }
  })
);

router.get(
  "/saved/:userId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await SavedBusiness.findAll({ where: { userId } });
      if (response.ok) {
        res.json(response);
      }
    } catch (error) {
      throw new Error("Saved business not found");
    }
  })
);
router.post(
  "/saved/:userId/:businessId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await SavedBusiness.create({ userId, businessId });
      if (response.ok) {
        res.json(response);
      }
    } catch (error) {
      throw new Error("Saved business not found");
    }
  })
);
router.get(
  "/collections/:userId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await Collection.findAll({ where: { userId } });
      if (response.ok) {
        res.json(response);
      }
    } catch (error) {
      throw new Error("Collections not found");
    }
  })
);
router.post(
  "/collections/:userId/:businessId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await Collection.create({ userId, businessId });
      if (response.ok) {
        res.json(response);
      }
    } catch (error) {
      throw new Error("Collections not found");
    }
  })
);
module.exports = router;
