import React, {useState} from "react";

function TaskfunctionComponent(){
    const [Data,Display]=useState("")
    return(
        <>
        <div>
        <h1>{Data}</h1>
        <button onClick={()=>Display("Thanks to Visit Credo Systemz")}>Login</button>
        <button onClick={()=>Display("Visit Again!")}>Logout</button>

        </div>
        

        </>
    )
}
export default TaskfunctionComponent

