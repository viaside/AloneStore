import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;   
`

const Button = styled.button`
    height: 35px;
    width: 35px; 
    margin: 5px;
    font-size: 15px;
    border: none;
    border: 1.5px solid ${props => props.available? "#000" : "#DBDBDB"};
    background-color: ${props => props.active? "rgba(0, 0, 0, 0.75);" : "transparent"};
    color: ${props => props.available? props.active? "white" : "#000" : "#DBDBDB"};
    &:hover{
        cursor: pointer;
    }
`

function SizeSelector(props) {
    const {S, M, L, XL, setSize} = props;
    const [arr, changeArr]  = useState([false, false, false, false]);
    console.log(arr)
    return(
        <Container>
            <Button onClick={() => 
                changeArr(arr.map((x, i) => {
                    console.log(i)
                    setSize("S"); 
                    if(S){
                        if(i === 0){
                            return !x 
                        }    
                    }}))
                } 
                active = {arr[0]}  available = {S}>S</Button>
            <Button onClick={() => 
                    {
                    setSize("M");
                    changeArr(arr.map((x, i) => { 
                        if(M){
                            if(i === 1){
                                return !x 
                            }    
                    }}));
                    } 
                }
                active = {arr[1]}  available = {M}>M</Button>
            <Button onClick={() => 
                changeArr(arr.map((x, i) => { 
                    setSize("L"); 
                    if(L){
                        if(i === 2){
                            return !x 
                        }    
                    }}))
                } 
                active = {arr[2]}  available = {L}>L</Button>
            <Button onClick={() => 
                changeArr(arr.map((x, i) => { 
                    setSize("XL"); 
                    if(XL){
                        if(i === 3){
                            return !x 
                        }    
                    }}))
                } 
                active = {arr[3]} available = {XL}>XL</Button>
        </Container>
    )
}

export default SizeSelector 