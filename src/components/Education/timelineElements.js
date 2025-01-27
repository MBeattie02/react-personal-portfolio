let timelineElements = [
  {
    id: 1,
    title: 'Queens University Belfast',
    location: 'Computer Science',
    type: 'EDUCATION',
    description: (
      <span>
        <h6
          style={{
            color: '#2F4F4F',
            marginBottom: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
          }}
        >
          3rd Year Computer Science Modules
        </h6>
        <ul
          style={{
            listStyle: 'none',
            padding: '0 15px',
            margin: '0',
          }}
        >
          <li
            style={{
              marginBottom: '8px',
              position: 'relative',
              paddingLeft: '20px',
              lineHeight: '1.4',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '0',
                content: '""',
                width: '6px',
                height: '6px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%',
                top: '8px',
              }}
            ></span>
            Cloud Computing
          </li>
          <li
            style={{
              marginBottom: '8px',
              position: 'relative',
              paddingLeft: '20px',
              lineHeight: '1.4',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '0',
                content: '""',
                width: '6px',
                height: '6px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%',
                top: '8px',
              }}
            ></span>
            Concurrent Programming
          </li>
          <li
            style={{
              marginBottom: '8px',
              position: 'relative',
              paddingLeft: '20px',
              lineHeight: '1.4',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '0',
                content: '""',
                width: '6px',
                height: '6px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%',
                top: '8px',
              }}
            ></span>
            Software Testing
          </li>
          <li
            style={{
              marginBottom: '8px',
              position: 'relative',
              paddingLeft: '20px',
              lineHeight: '1.4',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '0',
                content: '""',
                width: '6px',
                height: '6px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%',
                top: '8px',
              }}
            ></span>
            Network Security
          </li>
          <li
            style={{
              marginBottom: '8px',
              position: 'relative',
              paddingLeft: '20px',
              lineHeight: '1.4',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '0',
                content: '""',
                width: '6px',
                height: '6px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%',
                top: '8px',
              }}
            ></span>
            Computer Science Project
          </li>
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
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'flex-start',
            }}
          >
            <button
              className="btn"
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '14px',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
              }}
              onClick={() =>
                window.open('https://github.com/MBeattie02/code_review_tool')
              }
            >
              View Project On Github
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '14px',
                cursor: 'pointer',
                border: 'none',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
              }}
              onClick={() =>
                window.open(
                  'https://www.sciencedirect.com/science/article/pii/S2352711025000159'
                )
              }
            >
              View Published Paper
            </button>
          </div>
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
        <h6
          style={{
            color: '#2F4F4F',
            marginBottom: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
          }}
        >
          2nd Year Computer Science Modules
        </h6>
        <ul
          style={{
            listStyle: 'none',
            padding: '0 15px',
            margin: '0',
          }}
        >
          {[
            'Cyber Security Fundamentals',
            'Software Engineering and Systems Development',
            'Data Structures and Algorithms',
            'Theory of Computation',
            'Professional & Transfer Skills',
          ].map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: '8px',
                position: 'relative',
                paddingLeft: '20px',
                lineHeight: '1.4',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '0',
                  content: '""',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#4CAF50',
                  borderRadius: '50%',
                  top: '8px',
                }}
              ></span>
              {item}
            </li>
          ))}
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
        <h6
          style={{
            color: '#2F4F4F',
            marginBottom: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
          }}
        >
          1st Year Computer Science Modules
        </h6>
        <ul
          style={{
            listStyle: 'none',
            padding: '0 15px',
            margin: '0',
          }}
        >
          {[
            'Architecture and Networks',
            'Databases',
            'Fundamentals of Maths for Computing',
            'Programming',
            'Web Technologies',
            'Software Design Principles',
          ].map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: '8px',
                position: 'relative',
                paddingLeft: '20px',
                lineHeight: '1.4',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '0',
                  content: '""',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#4CAF50',
                  borderRadius: '50%',
                  top: '8px',
                }}
              ></span>
              {item}
            </li>
          ))}
        </ul>
      </span>
    ),
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
        <h6
          style={{
            color: '#2F4F4F',
            marginBottom: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
          }}
        >
          A Level:
        </h6>
        <ul
          style={{
            listStyle: 'none',
            padding: '0 15px',
            margin: '0',
          }}
        >
          {['Computer Science (A)', 'Maths (A)', 'Technology (A*)'].map(
            (item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '8px',
                  position: 'relative',
                  paddingLeft: '20px',
                  lineHeight: '1.4',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    content: '""',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50%',
                    top: '8px',
                  }}
                ></span>
                {item}
              </li>
            )
          )}
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
        <h6
          style={{
            color: '#2F4F4F',
            marginBottom: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
          }}
        >
          AS Level:
        </h6>
        <ul
          style={{
            listStyle: 'none',
            padding: '0 15px',
            margin: '0',
          }}
        >
          {['Computer Science (B)', 'Maths (A)', 'Technology (A)'].map(
            (item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '8px',
                  position: 'relative',
                  paddingLeft: '20px',
                  lineHeight: '1.4',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    content: '""',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50%',
                    top: '8px',
                  }}
                ></span>
                {item}
              </li>
            )
          )}
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
        <h6
          style={{
            color: '#2F4F4F',
            marginBottom: '15px',
            fontSize: '1.1rem',
            fontWeight: '600',
          }}
        >
          GCSE:
        </h6>
        <ul
          style={{
            listStyle: 'none',
            padding: '0 15px',
            margin: '0',
          }}
        >
          {[
            'Computer Science (A*)',
            'English Literature (A*)',
            'History (A*)',
            'Maths(A*)',
            'Physical Education (A*)',
            'Religious Education (A*)',
            'English Language (A)',
            'Physics (A)',
            'Technology (A)',
            'French (B)',
          ].map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: '8px',
                position: 'relative',
                paddingLeft: '20px',
                lineHeight: '1.4',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '0',
                  content: '""',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#4CAF50',
                  borderRadius: '50%',
                  top: '8px',
                }}
              ></span>
              {item}
            </li>
          ))}
        </ul>
      </span>
    ),
    date: 'September 2016 - June 2018',
    icon: 'school',
  },
]

export default timelineElements
