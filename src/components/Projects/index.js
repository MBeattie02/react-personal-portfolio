import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import projectsData from '../../data/projects.json'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderProjects = (projects) => {
    return (
      <div className="images-container">
        {projects.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.cover} className="projects-image" alt="projects" />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
            idx={15}
          />
        </h1>
        <div>{renderProjects(projectsData.projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
