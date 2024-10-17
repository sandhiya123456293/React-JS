import React, { useState } from "react";

function CardAmountUpdate()
{
    const [amount,setAmount]=useState(100)
    return(
        <>
        <div>
        <h1>Amount - {amount}</h1>
        <button onClick={()=>setAmount(amount+100)}>+</button>
        <button onClick={()=>setAmount(amount*2)}>*</button>
        </div>
        </>
    )
}
export default CardAmountUpdate