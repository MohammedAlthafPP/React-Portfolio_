import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Splin from '../components/spline/Spline'

function Homepage() {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative ">
      <NavBar/>
      <div className="relative inner" id='home'>

     <Splin/>

      </div>
    
    </div>
  )
}

export default Homepage