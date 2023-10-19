import React, { useState } from "react";
import styled from "styled-components";

const CounterCustom = styled.div`
    border: solid 1px #000;
    width: 130px;
    max-height: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

const Button = styled.button`
    background-color: transparent;
    font-size: 32px;
    width: 44px;
    height: 100%;
    line-height: 0px;
    border: 0;
    transition: 0.5s;
    &:hover{ 
        background-color: var(--gray-element);
    }
`
const P = styled.p`
    font-size: 29px;
    width: 44px;
    height: 100%;
    border: solid 1px #000;
`


function Counter({DefaultCount, Count, SetCount}) {

    return (
        <CounterCustom>
            <Button onClick={() => SetCount(Count-1  === 0? 1 : Count - 1)}>-</Button>
            <P>{Count}</P>
            <Button onClick={() => SetCount(Count+1)}>+</Button>  
        </CounterCustom>
    )
}

export default Counter