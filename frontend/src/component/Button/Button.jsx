import React from "react";
import styled from "styled-components";

const ButtonCustom = styled.button`
    font-size: 20px;
    width: 100%;
    height: 45px;
    border: none;
    text-align: center;
    background-color: black;
    color: white;  
    transition: 0.5s;
    &:hover{
        cursor: pointer;
        background-color: var(--gray-text); 
    }
`

function Button(props) {
    const {text, func} = props;

    return(
        <ButtonCustom onClick={() => func()}>{text}</ButtonCustom>
    )
}

export default Button 