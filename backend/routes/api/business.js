const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

const { Business } = require("../../db/models");
const businessMethods = require("../../db/methods_business");

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const { businessId } = req.params;
//     const response = await Business.findOrCreate({
//       where: { yelpId: businessId },
//     });

//     return await res.json({ response });
//   })
// );

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const newBusiness = await Business.create({});
  })
);

// const yelpBusiness = async (id) => {
//   const response = await fetch(`https://api.yelp.com/v3/businesses/${id}`,{
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
//     }
//   })
//   if(response.ok ){
//     const yelpBiz = await response.json()
//     return yelpBiz
//   } else {
//     throw new Error('Bad Request')
//   }
// }
module.exports = router;
