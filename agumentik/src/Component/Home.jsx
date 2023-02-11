import React from 'react'
import Collaborate from './Collaborate'
import Courses from './Courses'
import ExploreCourse from './ExploreCourse'
import HeroPage from './HeroPage'
import Navbar from './Navbar'
import Pricing from './Pricing'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroPage/>
        <Collaborate/>
        <Courses/>
        <ExploreCourse/>
        <Pricing/>
    </div>
  )
}

export default Home