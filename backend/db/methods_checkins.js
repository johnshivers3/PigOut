const { businessesByYelpId } = require("./methods_business");
const { CheckIns } = require("./models");

const addCheckInRecord = async (userId, business) => {
  const dbBusiness = await businessesByYelpId(business);
  const checkedIn = await CheckIns.findOne({
    where: {
      userId,
      businessId: dbBusiness.yelpId,
    },
  });

  if (!checkedIn) {
    const checkUserIn = await CheckIns.create({
      userId,
      businessId: dbBusiness.yelpId,
    });
    return checkUserIn;
  }
  return checkedIn;
};

module.exports = { addCheckInRecord };
