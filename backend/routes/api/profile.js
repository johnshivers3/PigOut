const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Review } = require("../../db/models");
const { Business } = require("../../db/models");
const { CheckIns } = require("../../db/models");
const { addCheckInRecord } = require("./../../db/methods_checkins");
const { addSaveRecord } = require("./../../db/methods_savedbusiness");
const { Collection } = require("../../db/models");
const { SavedBusiness } = require("../../db/models");

router.post(
  "/checkins/:userId/:yelpId",
  asyncHandler(async (req, res) => {
    const { userId, yelpId } = req.params;
    try {
      const response = await addCheckInRecord(userId, req.body);

      res.json(response);
    } catch (error) {
      throw new Error("Check In Error");
    }
  })
);

router.post(
  "/saved/:userId/:businessId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await addSaveRecord(userId, req.body);

      res.json(response);
    } catch (error) {
      throw new Error("Saved business not found");
    }
  })
);

router.get(
  "/reviews/:userId",
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    try {
      const response = await Review.findAll({
        where: { userId: +userId },
      });

      res.json(response);
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
      const response = await CheckIns.findAll({
        where: { userId: +userId },
        // include: [{ model: Business}]
      });

      res.json(response);
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
      const response = await SavedBusiness.findAll({
        where: { userId: +userId },
      });
      res.json(response);
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
      const response = await Collection.findAll({
        where: { userId: +userId },
      });

      res.json(response);
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

      res.json(response);
    } catch (error) {
      throw new Error("Collections not found");
    }
  })
);
module.exports = router;
