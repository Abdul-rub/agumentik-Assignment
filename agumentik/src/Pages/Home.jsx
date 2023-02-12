import React from 'react'
import Collaborate from '../Component/Collaborate'
import Courses from '../Component/Courses'
import ExploreCourse from '../Component/ExploreCourse'
import HeroPage from '../Component/HeroPage'
import Navbar from '../Component/Navbar'
import { Pricing } from './Pricing'
import Testimonial from './Testimonial'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroPage/>
        <Collaborate/>
        <Courses/>
        <ExploreCourse/>
        <Pricing/>
        <Testimonial/>
    </div>
  )
}

export default Home