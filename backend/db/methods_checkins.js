const { businessesByYelpId } = require("./methods_business");
const { CheckIns } = require("./models");

const addCheckInRecord = async (userId, business) => {
  const dbBusiness = await businessesByYelpId(business);
  const checkedIn = await CheckIns.findOne({
    where: {
      userId,
      id: Number(dbBusiness.id),
    },
  });

  if (!checkedIn) {
    const checkUserIn = await CheckIns.create({
      userId,
      businessId: Number(dbBusiness.id),
    });
    return checkUserIn;
  }
  return checkedIn
};

module.exports = { addCheckInRecord };
