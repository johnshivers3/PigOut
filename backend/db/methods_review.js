const { Review } = require("./models");

async function reviewsByUserId(userId) {
  return await Review.findAll({
    where: {
      userId,
    },
  });
}

async function addReview(rating, answer, userId, businessId, draft) {
  const review = await Review.create({
    rating,
    answer,
    userId,
    businessId,
    draft
  })
  return await Review.findByPk(review.id)
}

async function deleteReview(reviewId) {
  const review = await Review.findByPk(reviewId);
  if (!review) throw new Error('Cannot find review');

  await Review.destroy({ where: { id: review.id }});
  return review.id;
}

// async function updateReview(rating, answer, userId, businessId, draft) {
//   const id = details.id;
//   delete details.id;
//   console.log({ details, id });
//   await Item.update(
//     details,
//     {
//       where: { id },
//       returning: true,
//       plain: true,
//     }
//   );
//   return await Item.findByPk(id);
// }

module.exports = {
  reviewsByUserId,
  addReview,
  deleteReview,
  // updateReview
}
