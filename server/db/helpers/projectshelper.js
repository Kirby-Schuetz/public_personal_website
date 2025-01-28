const client = require("../client")

const createProject = async ({ project_title, project_post, project_image}) => {
    const inputParams = {
        project_title: project_title,
        project_post: project_post,
        project_image: project_image
    };
    console.log("DB Handler: ", inputParams);
    try {
        const {
            rows: [project],
        } = await client.query (
            `
            INSERT INTO projects(project_title, project_post, project_image)
            VALUES($1, $2, $3)
            RETURNING *
            `,
            [project_title, project_post, project_image]
        )
        return project
    } catch (error) {
        throw error
    }
};

const getAllProjects = async () => {
    try {
        const { rows }
        = await client.query(`
        SELECT *
        FROM projects;
        `)
        for (const row of rows) {
            row.project_image = _bytesToString(row.project_image);
        }
        return rows;
    } catch (error) {
        throw error
    }
};

const getSingleProject = async (project_id) => {
    const query = `SELECT * FROM projects WHERE project_id = $1`;
    const values = [project_id];
    try {
        const result = await client.query(query, values);
        let project = result.rows[0];
        project.project_image = _bytesToString(project.project_image);
        return project
    } catch (error) {
        throw error
    }
};

const _bytesToString = (bytes) => {
    const buffer = Buffer.from(bytes);
    const string = buffer.toString();
    return string;
};

module.exports = { createProject, getAllProjects, getSingleProject }