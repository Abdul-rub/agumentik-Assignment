import React from 'react'
import {Routes,Route} from "react-router-dom"
import AnotherPage from './AnotherPage'
import Home from './Home'


const Allroutes = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path='/anotherpage' element={<AnotherPage/>}/>
    </Routes>
  )
}

export default Allroutes