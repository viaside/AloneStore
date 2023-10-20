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
    const [TotalPrice, setTotalPrice] = useState(0);
    
    const [FullName, setFullName] = useState(null); 
    const [Address, setAddress] = useState(null); 
    const [PhoneNumber, setPhoneNumber] = useState(null); 

    useEffect(() => UpdateCart(), []);

    function UpdateCart(){
        fetch(`/cartDetail/${localStorage.getItem("cartId")}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(data => {
            setData(data);
            let totalPrice = 0;
            data.map(el =>{
                totalPrice += el.price * el.quantity    
            });
            setTotalPrice(totalPrice);
        })
        .catch((error) => console.log(error));
        if(FullName === null){
            fetch(`/users/${localStorage.getItem("userId")}`, {
                method: "GET",
            })
            .then((response) => response.json())
            .then(data => {
                setFullName(data[0].full_name);
                setAddress(data[0].address);
                setPhoneNumber(data[0].phone_number);
            })
            .catch((error) => console.log(error));
        }
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

    function Order(){
        fetch(`/order`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: localStorage.getItem("cartId"), FullName: FullName, Address: Address, PhoneNumber: PhoneNumber})
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
                <Label style={{textAlign: "right"}}>SubTotal: {TotalPrice}$</Label>
            </ContainerCart>
            <ContainerAddres isMobile={isMobile}> 
                <h1>Dilivery address</h1>
                <Label>Full name</Label>
                <Input name = "FullName" value={FullName} onChange={(e) => setFullName(e.target.value)} text={null} placeholder="Full name"/>
                <Label>Address</Label>
                <Input name = "Address" value={Address} onChange={(e) => setAddress(e.target.value)} text={null} placeholder="Address"/>
                <Label>Phone number</Label>
                <Input name = "PhoneNumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} text={null} placeholder="Phone number"/>
                <p>The shopping cart automatically fill</p>
                <Button onClick={() => Order()}>Buy</Button>
                <p>Taxes are included. Worldwide shipping with Alone Store tracking.</p>
            </ContainerAddres>
        </Container>
    )
}

export default Cart