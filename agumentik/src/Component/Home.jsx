import React from 'react'
import Collaborate from './Collaborate'
import HeroPage from './HeroPage'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroPage/>
        <Collaborate/>
    </div>
  )
}

export default Home