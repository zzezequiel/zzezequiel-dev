import React from 'react'
import About from '../about/About'
import Banner from '../banner/Banner'
import Knowledge from '../knowledge/Knowledge'

const MainBody = () => {
  return (
    <>
    <div className='body-bg'>
        <Banner />
        <About />
        <Knowledge />
    </div>
    
   </>
  )
}

export default MainBody