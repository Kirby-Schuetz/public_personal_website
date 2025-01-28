const express = require('express');
const router = express.Router();

const { getAllProjects, getSingleProject } = require('../db/helpers/projectshelper');


// GET all projects
router.get('/', async (req, res, next) => {
    console.log("Request all projects")
    try{
        const projects = await getAllProjects();
        res.send(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error"})
    }
});

// GET single project
router.get('/:project_id', async (req, res, next) => {
    try{
        const project = await getSingleProject(req.params.project_id);
        res.send(project);
    } catch (error) {
        next(error);
    }
})

// export router
module.exports = router;