import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
//import Link from "../components/Link";
  import List from "../components/List";
  import "../pages/Projects.css"

function Projects({ userName }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=3`
      );
      const results = await data.json();

      if (results) {
        setProjects(results);
        setLoading(false);
      }
    }

    fetchData();
  }, [userName, currentPage]);

  return (
    <div className="Project-container">
      <h2>Projects</h2>

      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={projects.map((project) => ({
              field: project.name,
              value: (
                <RouterLink to={`/projects/${project.name}`}>
                  Open project
                </RouterLink>
              ),
            }))}
          />
          <div className="button-container"><button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button><button onClick={() => setCurrentPage(currentPage + 1)}>Next</button></div>
          <div className="container">
            
          </div>
        </div>
        
      )}
    </div>
  );
}

export default Projects;
