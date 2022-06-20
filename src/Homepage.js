import React from 'react'
import Section from './Section'
import SideBar from './Sidebar'


function Homepage() {
  return (
    <div className='flex'>
      <SideBar />
      <Section />
    </div>
  )
}

export default Homepage
