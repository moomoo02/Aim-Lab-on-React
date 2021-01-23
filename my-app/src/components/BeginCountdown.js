import React,{useState} from 'react'
import Countdown from './Countdown'

function BeginCountdown() {
    const [display,setDisplay] = useState(false)
    console.log(display)
    return (
        <div>
            {!display && <button onClick={() =>setDisplay(true)}>Start</button>}
            {display && <Countdown/>}
        </div>
    )
}

export default BeginCountdown
