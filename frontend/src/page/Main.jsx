import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import OrderAdmin from "../component/OrderAdmin/OrderAdmin";

function Main() {
    const [state, setState] = useState(null);

    const callBackendAPI = async () => {
        const response = await fetch('/user/0');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message)
        }
        return body;
    };
      
    useEffect(() => {
        callBackendAPI()
        .then(res => setState(res))
        .catch(err => console.log(err));
    }, [])

    console.log(state);

    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
        </div>
    )
}

export default Main