import React from 'react'
import About from '../about/About'
import Banner from '../banner/Banner'
import Details from '../details/Details'
import Divider from '../divider/Divider'
import Education from '../education/Education'
import Knowledge from '../knowledge/Knowledge'
import Projects from '../projects/Projects'

const MainBody = () => {
  return (
    <>
    <div className='body-bg'>
      <div className='container cont-bg p-4'>
        <Banner />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Details />
        <Education />
        <Knowledge />
      </div>
        
    </div>
    
   </>
  )
}

export default MainBody