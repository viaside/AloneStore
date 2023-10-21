import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.isMobile? "5px" : ""};
`

const Label = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`

const BigText = styled.p`
    font-size: 32px;
    text-align: center; 
`

const A = styled.a`
    text-align: center;
    font-size: 20px;
    color: black;
`

function Login() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const [Login, setLogin] = useState(null); 
    const [Password, setPassword] = useState(null); 

    const HandleChange = (event) => {
        switch (event.target.name) {
            case "Login":
                setLogin(event.target.value);
                break;
            case "Password": 
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const LoginUser = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`/userLogin/${Login}&${Password}`, requestOptions)
        .then(res => {
            if(res.status >= 400){
                res?.json().then((e) => {
                    alert(e.message)
                })    
            } else{
                res.json().then((e) => {
                    if(e.length > 0){
                        localStorage.setItem("isLogined", true);
                        window.location.href = '/';
                        localStorage.setItem("userId", e[0].user_id);
                        localStorage.setItem("cartId", e[0].cart_id);
                    } else{
                        alert("not found")
                    }
                })    
            }
        })
    }

    return (
        <Container isMobile={isMobile}s className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BigText>Welcome back</BigText>
            <Label>Login</Label>
            <Input name = "Login" value={Login} onChange={(e) => HandleChange(e)} text={null} placeholder="Login"/>
            <Label>Password</Label>
            <Input name = "Password" value={Password} onChange={(e) => HandleChange(e)} text={null} placeholder="Password"/>
            <br />
            <Button onClick={() => LoginUser()}>Login</Button>
            <A href="../Register">Not a memder? Sign up now</A>
        </Container>
    )
}

export default Login