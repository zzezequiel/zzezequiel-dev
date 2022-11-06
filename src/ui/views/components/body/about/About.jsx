import React from 'react'
import cartoon from "../../../../img/zzcartoon.png"

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col text-end'>
                    <img className='about-img' src={cartoon} alt=''></img>
                </div>
                <div className='col about-text-bg mt-5 p-3'>
                    <div className='row text-center'><h2>About me</h2></div>
                    <div className='row'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis laboriosam culpa illo ad officiis recusandae quaerat cupiditate iste beatae nemo ratione eum vel maiores veniam, ex maxime non enim molestias!</p></div>
                </div>
            </div>
            <hr />
        </div>
        
    </section>
  )
}

export default About