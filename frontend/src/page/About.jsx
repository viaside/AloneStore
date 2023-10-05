import React from "react";
import { useMediaQuery } from "react-responsive";

function About() {
    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <h1 style={{color: "black"}}>About</h1>
        </div>
    )
}

export default About