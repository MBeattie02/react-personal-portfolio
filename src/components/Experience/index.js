import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { ReactComponent as WorkIcon } from './work.svg'
import { ReactComponent as SchoolIcon } from './school.svg'

import timelineElements from './timelineElements'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  let workIconStyles = { background: '#06D6A0' }
  let schoolIconStyles = { background: '#f9c74f' }

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['E', 'X', 'P', 'E', 'R', 'I', 'E', 'N', 'C', 'E']}
            idx={12}
          />
        </h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === 'work'

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience
