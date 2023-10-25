import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import Statistics from './statistics.jsx'
import Testimonials from './Testimonials.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Statistics />
    <Testimonials />
  </React.StrictMode>,
)
