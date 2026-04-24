import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Features from '../../components/Feature'
import Testimonials from '../../components/Testimonial'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import EventsGrid from '../../components/Eventgrid'
import CreateEvent from './CreateEvent'
import OrganizationDashboard from './OrganizationDashboard'
import Events from "./Eventlist"
const Home = () => {
  return (
    <div>
       <Navbar/>
    
 
    <Hero/>
    <Features/>
  <EventsGrid/>
    <Testimonials/>
    <CTA/>
   
    <Footer/>
   
    </div>
  )
}

export default Home