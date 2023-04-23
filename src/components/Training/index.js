import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import trainingData from '../../data/training.json'

const Training = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderTraining = (training) => {
    return (
      <div className="images-container">
        {training.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="training-image"
                alt="training"
              />
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
      <div className="container training-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'T',
              'R',
              'A',
              'I',
              'N',
              'I',
              'N',
              'G',
            ]}
            idx={15}
          />
        </h1>
        <p className="text">
          Below are some training courses I have carried out to continue to develop my knowledge 
        </p>
        <div>{renderTraining(trainingData.training)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Training
