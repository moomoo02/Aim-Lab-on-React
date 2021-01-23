import React,{useState,useEffect} from 'react'

function Countdown() {
    const initialTimer = 30;
    const[timer,setTimer] = useState(initialTimer)

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
            if (timer === 0) {
                clearInterval(myInterval)
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        }; 
        
    })
    return (
        <div>
            <h1>{timer}</h1>
        </div>
    )
}

export default Countdown
