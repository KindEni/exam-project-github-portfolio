import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Project({ userName }) {
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState({})
  const { name } = useParams()

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/repos/${userName}/${name}`
      )
      const results = await data.json()

      if (results) {
        setProject(results)
        setLoading(false)
      }
    }

    if (userName && name) {
      fetchData()
    }
  }, [userName, name])

  return (
    <div className="project-container">
      <h2>Project: {project.name}</h2>
      {loading ? (
        <span>Loading....</span>
      ) : (
        <div>
          <h3>
            Full Name: {project.full_name}
          </h3>
          <h3>Url: <a href={project.html_url}>{project.html_url}</a></h3>
          <h3>
            Description: <span>{project.description}</span>
          </h3>
        </div>
      )}
    </div>
  )
}

export default Project
