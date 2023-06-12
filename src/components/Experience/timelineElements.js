
let timelineElements = [
  {
    id: 1,
    title: 'Junior Member Technical Staff',
    location: 'Oracle',
    type: 'PLACEMENT',
    description:(
    <span>
    <ul>
      <h6>
        Oracle Unity
      </h6>
      <li>Back-end development with the Platform product team </li>
      <li>Investigating and working on implementing and fixing OpenAPI specification 3 </li>
      <li>Increasing unit test code coverage of the unity Java code base
        implementing Jacoco coverage library, Mockito mocking framework and unit tests by
        identifying and testing edge cases</li>
      <li>Bug fixes on Unity lower development environments by deploying code fixes to Kubernetes pod and querying using postman </li>
      </ul>
      <ul>
      <h6>
        Oracle Commerce
      </h6>
      <li> Back-end and Front-end development on
        internal tools used by members of the Oracle Cloud Commerce designing, developing, and
        testing features and bug fixes 
      </li>
      <li>Tool was used to automate the weekly tests that were run
        on jenkins to confirm newly developed code was compatible and did not cause issues when
        merging with the existing code base.
      </li>
      </ul>
      </span>
    ),
    date: 'August 2022 - present',
    icon: 'oracle',
  },
  {
    id: 2,
    title: 'Queens Temporary Work',
    location: 'Queens University Belfast',
    type: 'PART-TIME JOB',
    description:(
      <ul>
        <li>As a guide for university open days, my role is to provide prospective students with an informative and engaging experience</li>
        <li>I use effective communication to allow me to articulate information clearly and adapt my style to suit different individuals or groups</li>
        <li>I am approachable and empathetic as open days can be overwhelming, so I strive to create a welcoming and comfortable environment for visitors</li>
        <li>I listen attentively to their concerns and needs, and I'm patient in addressing their individual questions</li>
      </ul>
    ),
    date: 'June 2023 - present',
    icon: 'queens',
  },
  {
    id: 3,
    title: 'Poll Clerk',
    location: 'Electorial Office Northern Ireland (EONI)',
    type: 'PART-TIME JOB',
    description:(
      <ul>
      <li>Poll clerk plays a vital role in elections by assisting with the smooth operation of polling stations.</li> 
      <li>Responsibilities include setting up and closing the station, assisting voters, maintaining order and security, completing administrative tasks, collaborating with the presiding officer and other poll workers, and upholding electoral laws and regulations</li>
      <li>This role is crucial in ensuring a fair and efficient electoral process</li>
      </ul>
    ),
    date: 'March 2022 - present',
    icon: 'vote',
  },
  {
    id: 4,
    title: 'General Assistant',
    location: 'SuperValu Richhill',
    type: 'PART-TIME JOB',
    description:(
        <ul>
        <li>Exhibited diligence in handling money, counting tills, processing refunds, Lotto and PayPoint.</li>
        <li>Maximised customer service while processing transactions, expediting customer complaints, and providing product recommendations to achieve a customer first environment.</li>
        <li>Demonstrated accountability and ownership as a key holder, responsible for store closure procedures</li>
        <li>Interacted with the VME software to accomplish promo cycle product price changes</li>
        <li>Maintained high store standards and reduced stock shrink through visual merchandising, packing out deliveries and rotating dates.</li>
        <li>Showcased leadership as an occasional shift supervisor of 4+ staff members.</li>
      </ul>
    ),
    date: 'September 2018 - September 2022',
    icon: 'super',
  },
  {
    id: 5,
    title: 'Front Of House Staff',
    location: 'Yellow Door Portadown',
    type: 'PART-TIME JOB',
    description:(
      <ul>
        <li>Advocated as a company ambassador to uphold standards and prestigious brand image while serving at weddings and events under intense pressure as part of a team of 15+ staff</li>
        <li>Ensured hygiene and quality standards by plating dishes in a high-pressure kitchen environment</li>
        <li>Promoted guest satisfaction by professionally and promptly clearing tables and resolving queries</li>
      </ul>
  ),
    date: 'March 2019 - March 2020',
    icon: 'yellow',
  },
  {
    id: 6,
    title: 'Queens University Belfast',
    location: 'Computer Science',
    type: 'EDUCATION',
    description: (
      <span>
        <h6>2nd Year Computer Science Modules </h6>
      <ul>
        <li>Cyber Security Fundamentals</li>
        <li>Software Engineering and Systems Development</li>
        <li>Data Structures and Algorithms</li>
        <li>Theory of Computation</li>
        <li>Professional & Transfer Skills</li>
      </ul>
      </span>
    ),
    date: 'September 2020 - June 2024',
    icon: 'queens',
  },
  {
    id: 7,
    title: 'Queens University Belfast',
    location: 'Computer Science',
    type: 'EDUCATION',
    description: (
      <span>
        <h6>1st Year Computer Science Modules </h6>
      <ul>
        <li>Architecture and Networks</li>
        <li>Databases</li>
        <li>Fundamentals of Maths for Computing</li>
        <li>Programming</li>
        <li>Web Technologies</li>
        <li>Software Design Principles</li>
      </ul>
      </span>
    ),
    //buttonText: 'View Backend Projects',
    date: 'September 2020 - June 2024',
    icon: 'queens',
  },
  {
    id: 8,
    title: 'A Levels',
    location: 'Portadown College',
    type: 'EDUCATION',
    description: (
      <span>
          <h6>A Level: </h6>
        <ul>
          <li>Computer Science (A)</li>
          <li>Maths (A)</li>
          <li>Technology (A*)</li>
        </ul>
      </span>
    ),
    date: 'September 2019 - June 2020',
    icon: 'school',
  },
  {
    id: 9,
    title: 'AS Levels',
    location: 'Portadown College',
    type: 'EDUCATION',
    description: (
      <span> 
          <h6>AS Level: </h6>
        <ul>
          <li>Computer Science (B) </li>
          <li>Maths (A) </li>
          <li>Technology (A) </li>
        </ul>
        </span>
    ),
    date: 'September 2018 - June 2019',
    icon: 'school',
  },

  {
    id: 10,
    title: 'GCSE',
    location: 'Portadown College',
    type: 'EDUCATION',
    description: (
      <span>
          <h6>GCSE: </h6>
        <ul>
          <li>Computer Science (A*) </li>
          <li>English Literature (A*) </li>
          <li>History (A*) </li>
          <li>Maths(A*) </li>
          <li>Physical Education (A*) </li>
          <li>Religious Education (A*) </li>
          <li>English Language (A) </li>
          <li>Physics (A) </li>
          <li>Technology (A) </li>
          <li>French (B) </li>
        </ul>
      </span>
    ),
    date: 'September 2016 - June 2018',
    icon: 'school',
  },
]

export default timelineElements
