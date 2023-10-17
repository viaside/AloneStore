import React, { useState } from "react";
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
    const [Login, setLogin] = useState(null); 
    const [Password, setPassword] = useState(null); 
    const [FullName, setFullName] = useState(null); 
    const [Email, setEmail] = useState(null); 
    const [Phone, setPhone] = useState(null); 
    const [Address, setAddress] = useState(null); 

    const RegisterUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: Login, password: Password, phone_number: Phone, email: Email, full_name: FullName, address: Address, is_admin: false})
        };
        fetch("/users", requestOptions)
        .then(res => {
            if(res.status >= 400){
                res.json().then((e) => {
                    alert(e.message.detail)
                })    
            } else{
                localStorage.setItem("isLogined", true);
                res.json().then((e) => {
                    localStorage.setItem("userId", e);
                    console.log(e);
                })    
            }
        })
    }

    const HandleChange = (event) => {
        switch (event.target.name) {
            case "Login":
                setLogin(event.target.value);
                break;
            case "Password": 
                setPassword(event.target.value);
                break;
            case "FullName": 
                setFullName(event.target.value);                   
                break;
            case "Email": 
                setEmail(event.target.value);
                break;
            case "Phone":
                setPhone(event.target.value);
                break;
            case "Address":
                setAddress(event.target.value);
                break
            default:
                break;
        }
    }

    return (
        <Container isMobile={isMobile} className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <BigText>Register</BigText>
            <Label>Login</Label>              
            <Input name = "Login" value={Login} onChange={(e) => HandleChange(e)} text={null} placeholder="Login"/>
            <Label>Password</Label>           
            <Input name = "Password" value={Password} onChange={(e) => HandleChange(e)} text={null} placeholder="Password"/>
            <Label>Full name</Label>          
            <Input name = "FullName" value={FullName} onChange={(e) => HandleChange(e)} text={null} placeholder="Full name"/>
            <Label>Email address</Label>      
            <Input name = "Email" value={Email} onChange={(e) => HandleChange(e)} text={null} placeholder="email@mail.com"/>
            <Label>Phone number</Label>       
            <Input name = "Phone" value={Phone} onChange={(e) => HandleChange(e)} text={null} placeholder="+7(999)999-99-99"/>
            <Label>Address</Label>            
            <Input name = "Address" value={Address} onChange={(e) => HandleChange(e)} text={null} placeholder="Address"/>
            <br />
            <Button text="Register" func={() => RegisterUser()}/>
            <A href="../Login">Already have an account?</A>
        </Container>
    )
}

export default Register