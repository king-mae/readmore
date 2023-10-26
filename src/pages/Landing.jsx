import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Statistics from '../components/statistics'
import Testimonials from '../components/Testimonials'

function Landing(){
    return (
        <>
        <NavBar />
        <Hero />
        <Statistics />
        <Testimonials />
        </>
    )
}

export default Landing;
