import React from "react";
import { useMediaQuery } from "react-responsive";

function Profile() {
    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <h1 style={{color: "black"}}>Profile</h1>
        </div>
    )
}

export default Profile