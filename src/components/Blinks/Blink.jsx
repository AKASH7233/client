import React from 'react'
import Story from '../MyBlink/Story'
import StoriesComponent from './Zucks'
function Blink() {
  
  return (
    <div className='flex items-center bg-gray-900'>
    <div className='text-white'><Story/></div>
    {/* <StoriesComponent /> */}
  </div>
  )
}

export default Blink