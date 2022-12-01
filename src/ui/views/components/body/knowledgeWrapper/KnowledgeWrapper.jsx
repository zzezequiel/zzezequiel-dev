import React from 'react'
import Details from '../details/Details'
import Knowledge from '../knowledge/Knowledge'

const KnowledgeWrapper = () => {
  return (
    <div className='container'>
        <div className='row cont-portfolio pb-5 ps-5 pt-5'>
    <Knowledge />
    <Details />
        </div>
    </div>
  )
}

export default KnowledgeWrapper