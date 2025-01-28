const express = require('express');
const router = express.Router();

const {  getAllBlogs, getSingleBlog } = require('../db/helpers/blogshelper');



// GET all blogs
router.get('/', async (req, res, next) => {
    console.log("Request all blogs");
    try{
        const blogs = await getAllBlogs();
        res.send(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" })
    }
});

// GET single blog
router.get('/:blog_id', async (req, res, next) => {
    try{
        const blog = await getSingleBlog(req.params.blog_id);
        res.send(blog);
    } catch (error) {
        next(error);
    }
})

// export router
module.exports = router;