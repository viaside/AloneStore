import React from "react";
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

    return (
        <Container isMobile={isMobile}s className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BigText>Welcome back</BigText>
            <Label>Login</Label>
            <Input text={null} placeholder="Login"/>
            <Label>Password</Label>
            <Input text={null} placeholder="Password"/>
            <br />
            <Button text="Login" func={() => alert("Logined")}/>
            <A href="../Register">Not a memder? Sign up now</A>
        </Container>
    )
}

export default Login