import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import WrongPage from './components/WrongPage'
import Training from './components/Training'

import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/training" element={<Training />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<WrongPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
