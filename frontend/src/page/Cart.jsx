import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";


import CartItem from "../component/CartItem/CartItem";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.isMobile? "column" : "row"};
    align-items: ${props => props.isMobile? "center" : ""};
    justify-content: space-between;
` 

const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.isMobile? "90%" : "55%"};
`

const ContainerAddres = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.isMobile? "90%" : "40%"};
` 

const Label = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`



function Cart() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const [Data, setData] = useState([]);
    
    useEffect(() => UpdateCart(), []);
    function UpdateCart(){
        fetch(`/cartDetail/${localStorage.getItem("cartId")}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(data => {
            setData(data);
        })
        .catch((error) => console.log(error));
    }

    function DeleteCartItem(id){
        fetch(`/cartDetail/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then(UpdateCart())
        .catch((error) => console.log(error));
    }

    function ChangeQuantityCartItem(id, quantity){
        fetch(`/cartDetailQuantity/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({quantity: quantity})
        })
        .then((response) => response.json())
        .then(UpdateCart())
        .catch((error) => console.log(error));
    }

    return (
        <Container isMobile={isMobile} className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <ContainerCart isMobile={isMobile}>
                <h1 style={{color: "black"}}>Your Cart</h1>
                {Data.map((el, i) => {
                    return <CartItem key={i} id = {el.det_id} img = {el.main_img} name = {el.name} price = {el.price} count = {el.quantity} size = {el.size} UpdateQuantity = {ChangeQuantityCartItem} Deleted = {DeleteCartItem}/>
                })}
                <Label style={{textAlign: "right"}}>SubTotal: 400$</Label>
            </ContainerCart>
            <ContainerAddres isMobile={isMobile}> 
                <h1>Dilivery address</h1>
                <Label>Full name</Label>
                <Input text={null} func={null} placeholder="Text..."/>
                <Label>Address</Label>
                <Input text={null} func={null} placeholder="Text..."/>
                <Label  >Phone number</Label>
                <Input text={null} func={null} placeholder="Text..."/>
                <p>The shopping cart automatically remembers the entered data (exclusively on your device), so you won't have to fill in the fields next time.</p>
                <Button func={() => alert("Bought")}>Buy</Button>
                <p>Taxes are included. Worldwide shipping with Alone Store tracking.</p>
            </ContainerAddres>
        </Container>
    )
}

export default Cart