import React from "react";
import { useMediaQuery } from "react-responsive";

function Main() {
    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <h1 style={{color: "black"}}>Main</h1>
        </div>
    )
}

export default Main