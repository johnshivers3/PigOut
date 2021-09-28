const { SavedBusiness } = require("./models");
const { businessesByYelpId } = require("./methods_business");

const addSaveRecord = async (userId, business) => {
  const dbBusiness = await businessesByYelpId(business);
  const isSaved = await SavedBusiness.findOne({
    where: {
      userId,
      businessId: dbBusiness.yelpId,
    },
  });

  if (!isSaved) {
    const newSave = await SavedBusiness.create({
      userId,
      businessId: dbBusiness.yelpId,
    });

    return newSave;
  }

  return isSaved;
};

module.exports = { addSaveRecord };
