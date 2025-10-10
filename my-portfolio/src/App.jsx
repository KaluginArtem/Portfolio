import './App.css'
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Skills from './pages/Skills/Skills.jsx'
import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <Link to = "/"> Home </Link>
        <Link to = "/projects"> Projects </Link>
        <Link to = "/skills"> Skills </Link>
      </nav>
      <Routes>
        <Route path = "/" element = {< Home />} /> 
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/skills" element = {<Skills />} />
      </Routes>
    </div>
  ) 
}

export default App
