import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import home from './memojiHi.png'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['', 'M', 'A', 'T', 'T', 'H', 'E', 'W']
  const jobArray = ['C', 'O', 'M', 'P', 'U', 'T', 'E', 'R']
  const jobArray2 = ['S', 'C', 'I', 'E', 'N', 'C', 'E']
  const jobArray3 = ['S', 'T', 'U', 'D', 'E', 'N', 'T']

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
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={26}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray3}
              idx={29}
            />
          </h1>
          <h2>Computer Science Student QUB</h2>
          <h2>&</h2>
          <h2>Placement Student Oracle</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="section-right">
          <img src={home} alt="icon" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
