import React from 'react'
import "./sass/style.scss"
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About/About'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Service from './components/Service/Service'
import Footer from './components/Footer'
 
export default function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={ <><Hero /> <About /></> } />
        <Route path='/service' element={ <Service />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}
