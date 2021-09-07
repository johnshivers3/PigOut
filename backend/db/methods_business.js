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

    dbBusiness = await Business.create({
      yelpId: business.yelpId,

      title: business.name,
      description: business.alias ?? null,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      lat:business.coordinates.latitude,
      lng:business.coordinates.longitude,
    });

    return dbBusiness;
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
