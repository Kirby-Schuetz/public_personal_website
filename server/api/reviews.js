const express = require('express');
const router = express.Router();

const { getAllReviews, getSingleReview } = require('../db/helpers/reviewshelper');

// GET all reviews
router.get('/', async (req, res, next) => {
    console.log("Request all reviews")
    try{
        const reviews = await getAllReviews();
        res.send(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error"})
    }
});

// GET single review
router.get('/:review_id', async (req, res, next) => {
    try{
        const review = await getSingleReview(req.params.review_id);
        res.send(review);
    } catch (error) {
        next(error);
    }
})

// export router
module.exports = router;