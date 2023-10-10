import React, { useState } from "react";
import styled from "styled-components";

const InputCustom = styled.input`
    width: 100px;
    height: 50px;
    background-color: transparent;
    color: black;  
    transition: 0.5s;
    padding: 5px 20px;
    border: 1.5px solid #797979;
    &:hover{
        cursor: pointer;
        background-color: var(--gray-element); 
    }
    &:focus-visible{
        outline: null;
    }
`

function InputImage(props) {
    const {text, placeholder} = props;
    const [img, SetText] = useState(text);

    return(
        <InputCustom type="image" src={img} value={img} onChange={e => SetText(e.target.value)} alt={placeholder}/>
    )
}

export default InputImage 