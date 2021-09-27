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
    draft,
  });
  return await Review.findByPk(review.id);
}

async function deleteReviewById(reviewId) {
  const review = await Review.findByPk(reviewId);
  if (!review) throw new Error("Cannot find review");

  await Review.destroy({ where: { id: review.id } });
  return review.id;
}

async function updateReview(reviewId, rating, answer) {
  // const id = details.id;
  // delete details.id;

  await Review.update(
    {
      rating,
      answer,
    },
    {
      where: { reviewId },
      returning: true,
      plain: true,
    }
  );
  return await Review.findByPk(reviewId);
}

module.exports = {
  reviewsByUserId,
  addReview,
  deleteReviewById,
  updateReview,
};
