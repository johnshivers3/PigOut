const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

const {
  Review,
  Business,
  CheckIns,
  Collection,
  SavedBusiness,
} = require("../../db/models");

const { addCheckInRecord } = require("./../../db/methods_checkins");
const { addSaveRecord } = require("./../../db/methods_savedbusiness");

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
        include: Business
      });

      res.json(response);
    } catch (error) {
      console.error(error)

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
        include: Business
      });
      console.log((Business));
      res.json(response);
    } catch (error) {
      // throw new Error("Check-Ins not found");
      console.error(error)
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
        include: Business
      });
      res.json(response);
    } catch (error) {
      console.error(error)

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
