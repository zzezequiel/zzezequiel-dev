import React, { useState } from 'react'
import cartoon from "../../../../img/zzcartoon.png"
import Details from '../details/Details'
import Knowledge from '../knowledge/Knowledge'

const About = () => {
    const [open,  setOpen] = useState(false)

   
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4 '>
                    <img className='about-img' src={cartoon} alt=''></img>
                </div>

                {!open?
                (<div onClick={()=> setOpen(true)} className='text-end fs-4'>
                    More aboute me! 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
                    </svg>
                </div>)
            : 
            



                (<div className='col-sm-8 about-text-bg mt-5 p-5' onClick={()=> setOpen(false)}>
                                    <div className='row'>
                                        <div className='row '><h2>About me</h2></div>
                                        <div className='row '><p className='justify-text '>Hello, my name is Ezequiel Zvirgzdiņš, I moved to Barcelona at the beginning of the year 2022. I am the Digital Manager of 2 companies, which are in charge of the online sale of construction materials and real estate. I am currently studying Software development at the Assembler Institute of Technology. I designed my own Exclusive Sneakers Online Sales website and I plan to finish more projects in the future.<br />
                                                                                        I consider myself a very outgoing and nice person, I am patient, kind and polite, I have the ability to quickly learn the tasks I have to do, I get very involved in the projects I do.<br />
                                                                                        In my free time I usually read astronomy books or learn about the new technologies of aerospace engineering; since one of my goals is to invest in projects or research that make the human being able to advance to a new multiplanetary stage.<br />
                                                                                        I am a lover of the gym and outdoor sports.<br />
                                                                                        This year 2022, in addition to creating an automatic online sales business on Amazon, I am going to create a real estate sales network.<br />
                                                                                        I have an open mind for any type of Project that teaches me to be a better person and a better professional.<br />
                                                                                        </p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='row text-center'><p>"the pressure and the challenges are an opportunity to grow"</p></div>
                                    </div>
                </div>)
                }
                



                </div>
                
            
        </div>
        
    </section>
  )
}

export default About