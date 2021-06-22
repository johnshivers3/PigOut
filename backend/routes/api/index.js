const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
// const businessRouter = require("./business.js");
// const reviewRouter = require("./review.js");
// const filterRouter = require("./filter.js");
// const profileRouter = require("./profile.js");
// const searchRouter = require("./search.js");
// const mainRouter = require("./main.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);
// router.use("/business", businessRouter);
// router.use("/review", reviewRouter);
// router.use("/filter", filterRouter);
// router.use("/profile", profileRouter);
// router.use("/search", searchRouter);
// router.use("/main", mainRouter);

module.exports = router;
