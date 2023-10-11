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

function Register() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return (
        <Container isMobile={isMobile} className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BigText>Register</BigText>
            <Label>Login</Label>
            <Input text={null} placeholder="Login"/>
            <Label>Password</Label>
            <Input text={null} placeholder="Password"/>
            <Label>Full name</Label>
            <Input text={null} placeholder="Full name"/>
            <Label>Email address</Label>
            <Input text={null} placeholder="email@mail.com"/>
            <Label>Phone number</Label>
            <Input text={null} placeholder="+7(999)999-99-99"/>
            <Label>Address</Label>
            <Input text={null} placeholder="Address"/>
            <br />
            <Button text="Register" func={() => alert("Registered")}/>
            <A href="../Login">Already have an account?</A>
        </Container>
    )
}

export default Register