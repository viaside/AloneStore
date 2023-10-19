import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CounterCustom = styled.div`
    border: solid 1px #000;
    width: 75px;
    height: 25px;
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
    min-width: 25px;
    border: solid 1px #000;
`


function CounterMiniDesktop(props) {
    const {id, DefaultCount, UpdateQuantity} = props.props;
    const [Count, SetCount] = useState(1);
    useEffect(()=>SetCount(DefaultCount), [props])

    function ChangeCountPlus(){
        SetCount(Count+1);
        UpdateQuantity(id, Count+1);
    }
    function ChangeCountMinus(){
        if(!(Count-1  === 0)){
            SetCount(Count-1);
            UpdateQuantity(id, Count-1);
        }  
    }
    return (
        <CounterCustom>
            <Button onClick={() => ChangeCountMinus()}>-</Button>
            <P>{Count}</P>
            <Button onClick={() => ChangeCountPlus()}>+</Button>  
        </CounterCustom>
    )
}

export default CounterMiniDesktop