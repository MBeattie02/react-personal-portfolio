import { useEffect, useState } from 'react'
import {
  faJava,
  faGitAlt,
  faDocker,
  faLinux,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Computer Science Student at Queens University Belfast</p>
          <p>Currently Completing A Years Placement At Oracle working within Oracle Unity</p>
          <p>A passionate software engineer with a strong interest in evolving and emerging new technologies, 
            highly organised and conscientious with an ability to quickly 
            learn new concepts and technologies. Currently seeking a challenging but rewarding role to develop technical 
            capabilities, personal skills and build future career foundations.</p>
          <button className="btn" onClick={() => window.open("https://drive.google.com/drive/folders/1LTicD0EtDttaXPBlClkg60OxazK0H9-c?usp=sharing")}>
                  VIEW MY CV
                </button>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCloud} color="#FF0000" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#000000" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDocker} color="#1E90FF" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
