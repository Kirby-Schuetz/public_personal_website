const BASE_URL = "http://localhost:5005/api/reviews";

// GET all reviews
export async function fetchAllReviews() {
    console.log("Fetching reviews");
    try {
        const response = await fetch(`${BASE_URL}/`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("No reviews!", error);
        return error;
    }
}

// GET review by review_id
export async function fetchReviewByReviewId(review_id) {
    try {
        const response = await fetch(`${BASE_URL}/${review_id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }            
        const result = await response.json();
            return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
