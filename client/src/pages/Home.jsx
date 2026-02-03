import React from 'react'
import Banner from '../components/home/banner'
import Hero from '../components/Hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Hero/>
        <Features/>
        <Testimonial/>
        <CallToAction/>
    </div>
  )
}

export default Home