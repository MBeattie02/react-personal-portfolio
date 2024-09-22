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
import { DiJava, DiPython, DiMongodb, DiNodejs, DiMysql } from 'react-icons/di'
import { FaReact, FaAws, FaDocker, FaLinux, FaGitAlt } from 'react-icons/fa'
import {
  SiFlask,
  SiSpringboot,
  SiMicrosoftazure,
  SiKubernetes,
} from 'react-icons/si'

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
          <p>Graduate Engineer At Wolfspeed Belfast</p>
          <p>
            A passionate software engineer with a strong interest in evolving
            and emerging new technologies, highly organised and conscientious
            with an ability to quickly learn new concepts and technologies.
            Currently seeking a challenging but rewarding role to develop
            technical capabilities, personal skills and build future career
            foundations.
          </p>
          {/* New Section with Programming Languages */}
          <div className="programming-languages-section">
            <h2>Programming and Databases</h2>
            <div className="language-icons">
              <div className="icon">
                <DiJava color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Java
                </span>
              </div>
              <div className="icon">
                <DiPython color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Python
                </span>
              </div>
              <div className="icon">
                <DiMysql color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  SQL
                </span>
              </div>
              <div className="icon">
                <DiMongodb color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  MongoDB
                </span>
              </div>
              <div className="icon">
                <DiNodejs color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  NodeJs
                </span>
              </div>
            </div>
            <h2>Frameworks</h2>
            <div className="language-icons">
              <div className="icon">
                <FaReact color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  React
                </span>
              </div>
              <div className="icon">
                <SiFlask color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Flask
                </span>
              </div>
              <div className="icon">
                <SiSpringboot color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Springboot
                </span>
              </div>
            </div>
            <h2>Tools and Platforms</h2>
            <div className="language-icons">
              <div className="icon">
                <FaAws color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  AWS
                </span>
              </div>
              <div className="icon">
                <FaDocker color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Docker
                </span>
              </div>
              <div className="icon">
                <FaLinux color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Linux
                </span>
              </div>
              <div className="icon">
                <FaGitAlt color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Git
                </span>
              </div>
              <div className="icon">
                <SiMicrosoftazure color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Azure
                </span>
              </div>
              <div className="icon">
                <SiKubernetes color="#FFFFFF" size={90} />
                <span
                  style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                  }}
                >
                  Kubernetes
                </span>
              </div>
            </div>
          </div>
          <button
            className="btn"
            onClick={() =>
              window.open(
                'https://drive.google.com/drive/folders/1LTicD0EtDttaXPBlClkg60OxazK0H9-c?usp=sharing'
              )
            }
          >
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
