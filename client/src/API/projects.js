const BASE_URL = "http://localhost:5005/api/projects";

// GET all projects
export async function fetchAllProjects() {
    console.log("Fetching projects");
    try {
        const response = await fetch(`${BASE_URL}/`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("No projects!", error);
        return error;
    }
}