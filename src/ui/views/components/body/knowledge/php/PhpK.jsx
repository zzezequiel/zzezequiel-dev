import React, { useState } from 'react'
import php_logo from "../../../../../img/php.png"


const PhpK = () => {
    const [open, setOpen] = useState(false)
    return (
  
          <div className='col' onClick={()=>setOpen(!open)}>
              {!open ? (
                  <img className='k-img' src={php_logo}></img>
              ):(
                  <div>
                      <img className='k-img-open' src={php_logo}></img>
                      <div>
                          <h4>?????</h4>
                          <ul>
                              <li>?????</li>
                              <li>?????</li>
                              <li>?????</li>
                              <li>?????</li>
                              <li>?????</li>
                             
                          </ul>
                          
                      </div>
                  </div>
              )}
          </div>
      
    )
}

export default PhpK