const client = require("../client")

const createBlog = async ({blog_title, blog_post, blog_image}) => {
    const inputParams = {
        blog_title: blog_title,
        blog_post: blog_post,
        blog_image: blog_image
    };
    console.log("DB Handler: ", inputParams);
    try {
        const {
            rows: [blog],
        } = await client.query (
            `
            INSERT INTO blogs(blog_title, blog_post, blog_image)
            VALUES($1, $2, $3)
            RETURNING *
            `,
            [blog_title, blog_post, blog_image]
        )
        return blog
    } catch (error) {
        throw error
    }
};

const getAllBlogs = async () => {
    try {
        const { rows }
        = await client.query(`
        SELECT *
        FROM blogs;
        `)
        for (const row of rows) {
            row.blog_image = _bytesToString(row.blog_image);
        }
        return rows;
    } catch (error) {
        throw error
    }
};

const getSingleBlog = async (blog_id) => {
    const query = `SELECT * FROM blogs WHERE blog_id = $1`;
    const values = [blog_id]
    try {
        const result = await client.query(query, values);
        let blog = result.rows[0];
        blog.blog_image = _bytesToString(blog.blog_image);
        return blog
    } catch (error) {
        throw error
    }
};

const _bytesToString = (bytes) => {
    const buffer = Buffer.from(bytes);
    const string = buffer.toString();
    return string;
};


module.exports = { createBlog, getAllBlogs, getSingleBlog }