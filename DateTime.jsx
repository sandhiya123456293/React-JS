import React, {useState} from "react";


function DateTimedisplay(){
    const [date,setDate]=useState(new Date());

    const handleClick=()=>{
        setDate(new Date());

    };
    return(
        <>
        <div>
        <h3>Current Date and Time:</h3>
        <button onClick={handleClick}>Update Date and Time</button>
        </div>
        </>
        
    )
    }
    export default DateTimedisplay;
