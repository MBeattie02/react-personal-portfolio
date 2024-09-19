import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import home from './matthewGate.png'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['', 'M', 'A', 'T', 'T', 'H', 'E', 'W']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>I,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'M</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <br></br>
          <h3>Computer Science Graduate QUB</h3>
          <h3>&</h3>
          <h3>Graduate Engineer At Wolfspeed Belfast</h3>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="section-right">
          <img src={home} alt="icon" className="home-image" />
          <div className="introduction">
            <p>
              Welcome to my personal website! I'm a passionate software engineer
              with a strong background in Computer Science. Here you'll find
              information about my projects, experiences, and how to get in
              touch with me.
            </p>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
