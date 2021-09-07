const { businessesByYelpId } = require("./methods_business");
const { CheckIns } = require("./models");

const addCheckInRecord = async (userId, business) => {

  const dbBusiness = await businessesByYelpId(business);
  const checkin = await CheckIns.create({
    userId,
    businessId: Number(dbBusiness.id),
  });
  return checkin;
};

module.exports = { addCheckInRecord };
