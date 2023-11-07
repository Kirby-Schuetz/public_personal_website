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
// POST create a new project
export async function createProject(postData) {
    console.log("API Client: ", postData)
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData)
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log("Your project did not post", error);
    }
}
// GET project by project_id
export async function fetchProjectByProjectId(project_id) {
    console.log("Fetching single project")
    try {
        const response = await fetch(`${BASE_URL}/${project_id}`);
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
// PUT edit project
export const editProject = async (project_id, projectEdits) => {
    console.log("Submiting edits")
    try {
      const response = await fetch(`${BASE_URL}/${project_id}/edit`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectEdits)
      });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
      console.log("Your project did not update. Try again!", error);
    }
  }
// DELETE project
export async function deleteProject(project_id) {
    try {
        const response = await fetch(`${BASE_URL}/${project_id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
            }
        });
          const result = await response.json();
          return result;
    } catch (error) {
        console.log("Your project did not delete. Try again!", error);
    }
}