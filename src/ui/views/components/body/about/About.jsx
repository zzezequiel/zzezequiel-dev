import React from 'react'
import cartoon from "../../../../img/zzcartoon.png"

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-4 '>
                    <img className='about-img' src={cartoon} alt=''></img>
                </div>
                <div className='col-sm-8 about-text-bg mt-5 p-5'>
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
                    </div>   
                </div>
                <div className='row cont-portfolio pb-5 ps-5 pt-5'>
                    <div className='col'>
                        <div className='row mb-3 title-portfolio  '>
                            <div className=' icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" class="bi bi-database-fill-gear" viewBox="0 0 16 16">
                                    <path d="M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1Z"/>
                                    <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7Zm6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.552 4.552 0 0 1 .23-2.002Zm-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.507 4.507 0 0 1-1.3-1.905Zm3.631-4.538c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
                                </svg>
                            </div>
                            <div className='title-portfolio-text pt-2'><h5><b>Portfolio</b></h5></div>
                        </div>
                        <div className='row'>DV real estate</div>
                        <div className='row'>Comext Solutions</div>
                        <div className='row'>ZZ international business</div>
                        <div className='row'>Mentory</div>
                        <div className='row'>Wasiley store</div>
                    </div>
                    <div className='col'>
                        <div className='row mb-3 title-portfolio  '>
                            <div className=' icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                </svg>
                            </div>
                            <div className='title-portfolio-text pt-2'>
                                <h5><b>Skils</b></h5>
                            </div>
                        </div>
                        <div className='row'>| HTML |</div>
                        <div className='row'>| CSS |</div>
                        <div className='row'>| JAVASCRIPT | </div>
                        <div className='row'>| GIT  |</div>
                        <div className='row'>| PHP  |</div>
                        <div className='row'>| REACT  |</div>
                        <div className='row'>| NODE.JS  |</div>
                        <div className='row'>| MONGO DB  |</div>
                        <div className='row'>| TYPESCRIPT  |</div>
                        <div className='row'>| TESTING  |</div>
                    </div>
                    <div className='col'>
                        <div className='row mb-3 title-portfolio  '>
                            <div className=' icon'>
                                
                            </div>
                            <div className='title-portfolio-text pt-2'>
                                <h5><b>zzzzz</b></h5>
                            </div>
                        </div>
                        
                    </div>

                </div>
            
        </div>
        
    </section>
  )
}

export default About