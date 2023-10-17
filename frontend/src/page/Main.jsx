import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import OrderAdmin from "../component/OrderAdmin/OrderAdmin";

function Main() {
    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
        </div>
    )
}

export default Main