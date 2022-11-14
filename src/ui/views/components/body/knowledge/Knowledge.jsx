import React from 'react'
import react_logo from "../../../../img/React.png"
import php_logo from "../../../../img/php.png"
import node_logo from "../../../../img/nodejs.png"
import git_logo from "../../../../img/git.png"
import js_logo from "../../../../img/js.png"
import mongo_logo from "../../../../img/mongodb.png"

const Knowledge = () => {
  return (
    <>
    <section>
        <div className='container mt-5'>
            
            
            <div className='row text-center mt-3'>
                <div className=' d-flex '>
                    <div className='col'>
                        <img className='k-img' src={react_logo}></img>
                    </div>
                    <div className='col'>
                        <img className='k-img' src={php_logo}></img>
                    </div>
                    <div className='col'>
                        <img className='k-img' src={node_logo}></img>
                    </div>
                    <div className='col'>
                        <img className='k-img' src={git_logo}></img>
                    </div>
                    <div className='col'>
                        <img className='k-img' src={js_logo}></img>
                    </div>
                    <div className='col'>
                        <img className='k-img' src={mongo_logo}></img>
                    </div>
                </div>
                
            </div>
            </div>
        
    </section>
    </>
  )
}

export default Knowledge