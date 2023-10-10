import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import OrderUser from "../component/OrderUser/OrderUser";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.isMobile? "column" : "row"};
    align-items: ${props => props.isMobile? "center" : ""};
    width: 100%;
`

const Filter = styled.div`
    display: flex;
    width: ${props => props.isMobile? "" : "20%"};
    flex-direction: ${props => props.isMobile? "row" : "column"};
    justify-content: ${props => props.isMobile? " center" : ""};
` 
const FilterButton = styled.div`
    background-color: 0;
    padding-bottom: 15px;
    padding-right: 15px;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    };
    color: ${props => props.active ? "Black" : "var(--gray-element)"};
`   

const Label = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`

const PGray = styled.p`
    font-size: 20px; 
    color: var(--gray-text);
    padding: 0px;
    margin: 0px;
    margin-left: auto;
    height: 0px;
`


function Profile() {
    const [NowPage, SetPage] = useState("Info");
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return (
        <Container isMobile={isMobile} className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <Filter isMobile={isMobile}>
                <FilterButton active={ NowPage === "Info" ? true : false} onClick={() => SetPage("Info")}>Info</FilterButton>
                <FilterButton active={ NowPage === "Orders" ? true : false} onClick={() => SetPage("Orders")}>Orders</FilterButton>
            </Filter>
            {NowPage === "Info"? 
            <div style={{width: "70%" ,display: "flex", flexDirection: "column"}}> 
                <Label>Login</Label>
                <Input text={null} func={null} placeholder={"Login"}/>
                <Label>Password</Label>
                <Input text={null} func={null} placeholder={"*********"}/>
                <PGray>show</PGray>
                <Label>Full name</Label>
                <Input text={null} func={null} placeholder={"Full name"}/>
                <Label>Email Address</Label>
                <Input text={null} func={null} placeholder={"mail@mail.ru"}/>
                <Label>Phone number</Label>
                <Input text={null} func={null} placeholder={"+7(999)999-99-99"}/>
                <Label>Address</Label>
                <Input text={null} func={null} placeholder={"Address"}/>
                <br />
                <Button text="Save changes" func={()=> alert("Saved")}/>
            </div>
            :
            <div style={{width: "70%"}}>
                <OrderUser 
                    id = {16457597} date = {"20.04.2020"} status = {"in dilevery"} totalPrice={1000 } fullName = {"Ivan Voloshin Anatolevich"} 
                    phoneNumber = {"+7(999)999-99-99"} address = {"Moscow, Chelkovo, Bogorodkiy, 3, 63"} 
                    products = {[{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},]} 
                    Desc = {"The shopping cart automatically remembers the entered data (exclusively on your device), so you won't have to fill in the fields next time."}
                />
                <OrderUser 
                    id = {16457597} date = {"20.04.2020"} status = {"in dilevery"} totalPrice={1000 } fullName = {"Ivan Voloshin Anatolevich"} 
                    phoneNumber = {"+7(999)999-99-99"} address = {"Moscow, Chelkovo, Bogorodkiy, 3, 63"} 
                    products = {[{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},]} 
                    Desc = {"The shopping cart automatically remembers the entered data (exclusively on your device), so you won't have to fill in the fields next time."}
                    />
                <OrderUser 
                    id = {16457597} date = {"20.04.2020"} status = {"in dilevery"} totalPrice={1000 } fullName = {"Ivan Voloshin Anatolevich"} 
                    phoneNumber = {"+7(999)999-99-99"} address = {"Moscow, Chelkovo, Bogorodkiy, 3, 63"} 
                    products = {[{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},{img: '1', name: "Cap", size: "M", price: 400},]} 
                    Desc = {"The shopping cart automatically remembers the entered data (exclusively on your device), so you won't have to fill in the fields next time."}
                    />
            </div>
            }
        </Container>
    )
}

export default Profile