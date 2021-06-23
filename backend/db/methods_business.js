const { Business } = require("./models");

async function businessesByYelpId(yelpId){
  return await Business.findAll({
    where: {
      yelpId
    }
  })
}

async function addBusiness(){
  const business = Business.create()
  return await Business.findByPk(review.id)
}

module.exports = {
  businessesByYelpId
}
