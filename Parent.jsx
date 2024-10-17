import React from "react";
import Child from "./Child";

class Parent extends React.Component{
    render()
    {
        return(
            <>
            <h1>I am Parent Component</h1>
            <Child/>
            </>
        )

    }
}
export default Parent
