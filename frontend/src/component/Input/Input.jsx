import styled from "styled-components";

const Input = styled.input`
    max-width: 100%;
    font-size: 24px;
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
export default Input 