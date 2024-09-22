let timelineElements = [
  {
    id: 1,
    title: 'Queens University Belfast',
    location: 'Computer Science',
    type: 'EDUCATION',
    description: (
      <span>
        <h6>3rd Year Computer Science Modules </h6>
        <ul>
          <li>Cloud Computing</li>
          <li>Concurrent Programming</li>
          <li>Software Testing</li>
          <li>Network Security</li>
          <li>Computer Science Project</li>
          <h5>
            Code-Review-as-an-Educational-Service: An Education-oriented
            Software-as-a-Service Tool for Java Code Review
          </h5>
          <p style={{ color: 'black', fontSize: '15px', margin: '10px 0' }}>
            This work aims to provide a safety net for novice students by
            guiding them towards implementing industry-standard coding
            conventions and away from poor-quality code pitfalls. Functionally,
            the developed code review tool mainly leverages Abstract Syntax Tree
            (AST) analysis, so as to automatically conduct detailed examination
            of syntax and structure to identify code issues and suggest best
            practices that meet industry standards. Non-functionally, compared
            to other existing solutions, this work is particularly focused on
            minimising configurations/operations and maximising the easiness to
            use the tool for beginners.
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '15px 32px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '15px',
              margin: '2px 2px',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '2px',
            }}
            onClick={() =>
              window.open('https://github.com/MBeattie02/code_review_tool')
            }
          >
            View Project On Github
          </button>
          <h6>Overall Average : 75</h6>
        </ul>
      </span>
    ),
    date: 'September 2020 - June 2024',
    icon: 'queens',
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
