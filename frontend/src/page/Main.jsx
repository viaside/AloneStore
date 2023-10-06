import React from "react";
import { useMediaQuery } from "react-responsive";

import OrderAdmin from "../component/ProductAdmin/ProductAdmin";

function Main() {
    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <h1 style={{color: "black"}}>Main</h1>
            <OrderAdmin
            id = {2344234} img = {1} name = {"product"} category = {"shirt"} price = {300} Deleted = {() => alert("delete")}
            />
        </div>
    )
}

export default Main