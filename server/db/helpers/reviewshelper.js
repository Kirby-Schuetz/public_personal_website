const client = require("../client")

const createReview = async ({review_title, review_post, review_image}) => {
   const inputParams = {
        review_title: review_title,
        review_post: review_post,
        review_image: review_image
   };
   console.log("DB Handler: ", inputParams);
    try {
        const {
            rows: [review],
        } = await client.query(
            `
            INSERT INTO reviews(review_title, review_post, review_image)
            VALUES($1, $2, $3)
            RETURNING *;
            `,
            [ review_title, review_post, review_image ]
        )
        return review
    } catch(error) {
        throw error
    }
}

const getAllReviews = async () => {
    try {
        const { rows }
        = await client.query(`
        SELECT *
        FROM reviews;
        `)
        for (const row of rows) {
            row.review_image = _bytesToString(row.review_image);
        }
        return rows
    } catch (error) {
        throw error
    }
}

const getSingleReview = async (review_id) => {
    const query = `SELECT * FROM reviews WHERE review_id = $1`;
    const values = [review_id];
    try {
        const result = await client.query(query, values);
        let review = result.rows[0];
        review.review_image = _bytesToString(review.review_image);
        return review;
    } catch (error) {
        throw error
    }
}

const _bytesToString = (bytes) => {
    const buffer = Buffer.from(bytes);
    const string = buffer.toString();
    return string;
}

module.exports = { createReview, getAllReviews, getSingleReview }