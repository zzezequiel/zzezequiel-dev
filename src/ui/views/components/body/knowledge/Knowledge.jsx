import React from 'react'
import node_logo from "../../../../img/nodejs.png"
import git_logo from "../../../../img/git.png"
import js_logo from "../../../../img/js.png"
import mongo_logo from "../../../../img/mongodb.png"
import ReactK from "./react/ReactK";
import PhpK from "./php/PhpK";

const Knowledge = () => {
  return (
    <>
    <section>
        <div className='container mt-5'>
            
            
            <div className='row  mt-3'>
                <div className=' d-flex '>
                    <ReactK />
                    <PhpK />
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