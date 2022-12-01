import React from 'react'
import About from '../about/About'
import Banner from '../banner/Banner'
import Divider from '../divider/Divider'
import KnowledgeWrapper from '../knowledgeWrapper/KnowledgeWrapper'
import Projects from '../projects/Projects'

const MainBody = () => {
  return (
    <>
    <div className='body-bg'>
      <div className='container cont-bg p-4'>
        <Banner />
        <About />
        <KnowledgeWrapper />
        <Divider />
        <Projects />
        <Divider />
      </div>
        
    </div>
    
   </>
  )
}

export default MainBody