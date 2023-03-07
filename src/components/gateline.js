import './styles/gateline.css'
import { useState } from 'react';
const GateLine = ()=>{
    const [bit, setBit] = useState(0);
    let clickHandler=(event)=>{
       setBit(event.target.value(1));
    }
    return(
        <div className="gateline">
            <h1 className='h1' onClick={clickHandler} >{`|`}{bit}{`>`}</h1>
            
            <span className='row-line'></span>
        </div>
    )
}


export default GateLine