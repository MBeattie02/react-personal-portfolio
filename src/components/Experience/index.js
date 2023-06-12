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

import timelineElements from './timelineElements'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  let workIconStyles = { background: '#06D6A0' }
  let schoolIconStyles = { background: '#f9c74f' }
  let OracleIconStyles = { background: '#000000' }
  let QueensIconStyles = { background: '#FFFFFF' }
  let VoteIconStyles = { background: '#FFFFFF' }
  let SuperIconStyles = { background: '#FFFFFF' }
  let YellowIconStyles = { background: '#FFFFFF' }

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
            let isSchoolIcon = element.icon === 'school'
            let isOracleIcon = element.icon === 'oracle'
            let isQueensIcon = element.icon === 'queens'
            let isVoteIcon = element.icon === 'vote'
            let isSuperIcon = element.icon === 'super'

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                iconStyle={isWorkIcon ? workIconStyles : isSchoolIcon ? schoolIconStyles : isOracleIcon ? OracleIconStyles : isQueensIcon ? QueensIconStyles : isVoteIcon ? VoteIconStyles : isSuperIcon ? SuperIconStyles : YellowIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : isSchoolIcon ? <SchoolIcon /> : isOracleIcon ? <OracleIcon/> : isQueensIcon ? <QueensIcon/> : isVoteIcon ? <VoteIcon/> : isSuperIcon ? <SuperIcon/> : <YellowIcon/>}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.type}
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
