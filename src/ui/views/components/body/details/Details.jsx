import React from 'react'

const Details = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='row title-details'>

                <div className='title-details'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" fill="currentColor" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z"/>
                    </svg>
                </div>
                <div className='title-details'>
                    <h2>Details</h2>
                </div>
            
            </div>
            <div className='row d-flex'>
                <div className='col'>
                    <h4><b>Languages</b></h4>
                    <p>- HTML5</p>
                    <p>- JavaScript</p>
                    <p>- TypeScript</p>
                </div>
                <div className='col'>
                    <h4><b>Frameworks</b></h4>
                    <p>- Express.js</p>
                    <p>- Bootstrap</p>
                    <p>- Material-UI</p>
                </div>
                <div className='col'>
                    <h4><b>Libraries/APIs</b></h4>
                    <p>- React</p>
                    <p>- React Native</p>
                    <p>- Node.js</p>
                    <p>- React Router</p>
                </div>
                <div className='col'>
                    <h4><b>Storage</b></h4>
                    <p>- Webpack</p>
                </div>
                <div className='col'>
                    <h4><b>Tools</b></h4>
                    <p>- MongoDB</p>
                    <p>- Firebase</p>
                    <p>- NoSQ</p>
                </div>
                <div className='col'>
                    <h4><b>Platforms</b></h4>
                    <p>- Google Cloud Platform</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Details