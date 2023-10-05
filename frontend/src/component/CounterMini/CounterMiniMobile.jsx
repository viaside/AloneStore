import React, { useState } from "react";
import styled from "styled-components";

const CounterCustom = styled.div`
    border: solid 1px #000;
    width: 60px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    vertical-align: center;
`

const Button = styled.button`
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 0;
    &:hover{ 
        background-color: var(--gray-element);
    }
`
const P = styled.p`
    min-width: 20px;
    font-size: 13px;
    border: solid 1px #000;
`


function CounterMiniMobile(props) {
    const {DefaultCount} = props;
    const [Count, SetCount] = useState(DefaultCount? DefaultCount : 1);

    return (
        <CounterCustom>
            <Button onClick={() => SetCount(Count-1  === 0? 1 : Count - 1)}>-</Button>
            <P>{Count}</P>
            <Button onClick={() => SetCount(Count+1)}>+</Button>  
        </CounterCustom>
    )
}

export default CounterMiniMobile