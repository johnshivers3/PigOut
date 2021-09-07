const { Business } = require("./models");

async function businessesByYelpId(business) {
  let dbBusiness = await Business.findOne({
    where: {
      yelpId: business.id,
    },
  });
  if (!dbBusiness) {
    business["yelpId"] = business.id;
    delete business.id;
    dbBusiness = Business.create(business);
  }

  return dbBusiness;
}

// async function addBusiness(){
//   const business = Business.create()
//   return await Business.findByPk()
// }

module.exports = {
  businessesByYelpId,
};
