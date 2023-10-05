import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";


import CartItem from "../component/CartItem/CartItem";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
` 

const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
`

const ContainerAddres = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
` 

const Label = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`



function Cart() {
    return (
        <Container className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <ContainerCart>
                <h1 style={{color: "black"}}>Your Cart</h1>
                <CartItem id = "1" img = "1" name = "Product Name" price = "400" count = {2} size = "M" Deleted = {() => alert("Deleted")}/>
                <CartItem id = "1" img = "1" name = "Product Name" price = "400" count = {2} size = "M" Deleted = {() => alert("Deleted")}/>
                <CartItem id = "1" img = "1" name = "Product Name" price = "400" count = {2} size = "M" Deleted = {() => alert("Deleted")}/>
                <Label style={{textAlign: "right"}}>SubTotal: 400$</Label>
            </ContainerCart>
            <ContainerAddres>
                <h1>Dilivery address</h1>
                <Label>Full name</Label>
                <Input text={null} func={null} placeholder="Text..."/>
                <Label>Address</Label>
                <Input text={null} func={null} placeholder="Text..."/>
                <Label  >Phone number</Label>
                <Input text={null} func={null} placeholder="Text..."/>
                <p>The shopping cart automatically remembers the entered data (exclusively on your device), so you won't have to fill in the fields next time.</p>
                <Button text="Buy" func={() => alert("Bought")}/>
                <p>Taxes are included. Worldwide shipping with Alone Store tracking.</p>
            </ContainerAddres>
        </Container>
    )
}

export default Cart