import React, { useState } from 'react'
import react_logo from "../../../../../img/React.png"

const ReactK = () => {
    const [open, setOpen] = useState(false)
  return (

        <div className='col' onClick={()=>setOpen(!open)}>
            {!open ? (
                <img className='k-img' src={react_logo}></img>
            ):(
                <div>
                    <img className='k-img-open' src={react_logo}></img>
                    <div>
                        <h4>Hooks</h4>
                        <ul>
                            <li>useState</li>
                            <li>useEfect</li>
                            <li>useRef</li>
                            <li>useReducer</li>
                            <li>useCallback</li>
                            <li>useMemo</li>
                            <li>useContext</li>
                        </ul>
                        
                    </div>
                </div>
            )}
        </div>
    
  )
}

export default ReactK