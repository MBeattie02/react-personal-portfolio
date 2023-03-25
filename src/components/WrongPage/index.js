import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import wrong from './wrong.png'

import './index.scss'

const WrongPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
            <span className={letterClass}>L</span>
            <span className={`${letterClass} _12`}>O</span>
            <span className={`${letterClass} _13`}>S</span>
            <span className={`${letterClass} _14`}>T</span>
            <span className={`${letterClass} _15`}>?</span>
            <br></br>
          </h1>
          <h2>Gone The Wrong Way, Try an option on the side Menu</h2>

        </div>
        <div className="section-right">
          <img src={wrong} alt="icon" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default WrongPage
