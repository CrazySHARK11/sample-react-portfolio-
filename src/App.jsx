import React, { lazy } from 'react'
import "./sass/style.scss"
import Header from './components/Hero/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Service from './components/Service/Service'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'

 
export default function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={ <><Hero /> <About /></> } />
        <Route path='/service' element={ <Service />} />
        <Route path='/projects' element={ <Projects />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}
