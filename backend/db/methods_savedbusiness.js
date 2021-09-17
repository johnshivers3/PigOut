const { SavedBusiness } = require("./models");
const { businessesByYelpId } = require("./methods_business");

const addSaveRecord = async (userId, business) => {
  const dbBusiness = await businessesByYelpId(business);
  const isSaved = await SavedBusiness.findOne({
    where: {
      userId,
      id: Number(dbBusiness.id),
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
