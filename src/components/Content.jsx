import { useState, useEffect } from 'react'
import links from '../../data/links.js'
import reposBackup from '../../data/projects.js'

import Curtains from './Curtains.jsx'

function Content() {
  let [repos, setRepos] = useState([])

  const github_username = (links.find((link) => link.name == 'github').url).split('/').pop()

  useEffect(() => {
    function fetchProjects() {
      fetch(`https://api.github.com/users/${github_username}/repos`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setRepos(data)
        })
    }
    // fetchProjects()
    setRepos(reposBackup)
  }, [])
  let reposItems = repos.map((repo) => (
    <div className="project-item border">
      <a href={repo.html_url} className='text-primary'>{repo.name}</a>
      <div className="description text-secondary">{ repo.description || "description goes here..." }</div>
      <div className="date text-tertiary">last updated on: {new Date(repo.updated_at).toLocaleDateString()}</div>

      {repo.language && <div className="border language">{repo.language}</div>}

      <div className="d-flex gap topics">
        {repo.topics.map((topic) => (
          <div className="border bg-tertiary text-secondary topic">{topic}</div>
        ))}
      </div>

      <Curtains />
    </div>
  ))
  return (
    <div className='content bg-secondary'>
      <div className='project-list'>
        {reposItems}
      </div>
    </div>
  )
}

export default Content
