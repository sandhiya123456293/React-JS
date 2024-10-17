import React from "react";

function PropsFunctionComponent(Props){
    return(
        <>
        <h1>{Props.Name} - {Props.Position}</h1>
        <h1>{Props.Age} - {Props.City}</h1>

        </>
    )

}
export default PropsFunctionComponent