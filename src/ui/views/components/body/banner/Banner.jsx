import React from 'react'
import { Title } from '../../../../styles'


const Banner = () => {
  return (
    <>
        <div className='container'>
            <div className='row cont-banner-row'>
                    <Title>
                        <h1>Ezequiel Zvirgzdins</h1>
                        <h2>Software Developer</h2>
                    </Title>    
            </div>
            <div className='row'>
                <div className='col text-center'>
                <button type="button" className="btn btn-outline-light mt-3">BUTTON</button>
                </div>
            </div>
        </div>
</>
  )
}

export default Banner