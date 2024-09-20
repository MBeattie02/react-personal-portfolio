import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { ReactComponent as WorkIcon } from './work.svg'
import { ReactComponent as SchoolIcon } from './school.svg'
import { ReactComponent as OracleIcon } from './oracle.svg'
import { ReactComponent as QueensIcon } from './queens.svg'
import { ReactComponent as VoteIcon } from './vote.svg'
import { ReactComponent as SuperIcon } from './supervalu.svg'
import { ReactComponent as YellowIcon } from './yellowdoor.svg'
import { ReactComponent as WolfIcon } from './wolf.svg'

import timelineElements from './timelineElements'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  // Define icon styles in a map for easy access based on type
  const iconStyles = {
    work: { background: '#06D6A0' },
    school: { background: '#f9c74f' },
    oracle: { background: '#000000' },
    queens: { background: '#FFFFFF' },
    vote: { background: '#FFFFFF' },
    super: { background: '#FFFFFF' },
    yellow: { background: '#FFFFFF' },
    wolf: { background: '#FFFFFF' },
  }

  // Create a mapping of icons to their types
  const iconMap = {
    work: <WorkIcon />,
    school: <SchoolIcon />,
    oracle: <OracleIcon />,
    queens: <QueensIcon />,
    vote: <VoteIcon />,
    super: <SuperIcon />,
    yellow: <YellowIcon />,
    wolf: <WolfIcon />,
  }

  const [letterClass, setLetterClass] = useState('text-animate')

  // Transition effect for AnimatedLetters
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
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
          // Select the correct icon and styles
          const icon = iconMap[element.icon]
          const iconStyle = iconStyles[element.icon]

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              iconStyle={iconStyle} // Apply dynamic icon styles
              icon={icon} // Use the correct icon component
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: 'red', fontSize: '24px' }} // Correct camelCase style
              >
                {element.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: 'black', fontSize: '20px' }} // Correct camelCase
              >
                {element.location}
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: 'black', fontSize: '10px' }} // Correct camelCase
              >
                {element.type}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
