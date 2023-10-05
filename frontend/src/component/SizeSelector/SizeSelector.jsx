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
    const {XS, S, M, L, XL} = props;
    const [arr, changeArr]  = useState([false, false, false, false, false]);

    return(
        <Container>
            <Button onClick={() => 
            changeArr(arr.map((x, i) => { 
                if(i === 0){
                    return !x 
                } }))
                } 
                active = {arr[0]} available = {XS}>XS</Button>
            <Button onClick={() => 
                changeArr(arr.map((x, i) => { 
                    if(i === 1){
                        return !x 
                    } }))
                } 
                active = {arr[1]}  available = {S}>S</Button>
            <Button onClick={() => 
              changeArr(arr.map((x, i) => { 
                    if(i === 2){
                        return !x 
                    } }))
                } 
                active = {arr[2]}  available = {M}>M</Button>
            <Button onClick={() => 
                changeArr(arr.map((x, i) => { 
                    if(i === 3){
                        return !x 
                    } }))
                } 
                active = {arr[3]}  available = {L}>L</Button>
            <Button onClick={() => 
                changeArr(arr.map((x, i) => { 
                    if(i === 4){
                        return !x 
                    } }))
                } 
                active = {arr[4]} available = {XL}>XL</Button>
        </Container>
    )
}

export default SizeSelector 