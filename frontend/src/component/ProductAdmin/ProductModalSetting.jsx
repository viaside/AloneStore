import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Input from "../Input/Input";
import InputImage from "../InputImage/InputImage";
import Button from "../Button/Button";

const Modal = styled.div`
    display: ${props => props.show ? "block" : "none"}; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    border-radius: 20px; 
`
const ElContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0px;
`

const P = styled.p`
    font-size: 20px;
    padding: 0px;
    margin: 0px;
`

function ProductModalSetting(props){
    const {id, name, desc, category, price, phone, img} = props;

    return(
        <Modal show={props.isShow}>
            <Content>
                <h1>{name}</h1>
                <ElContainer>
                    <P>Name</P>
                    <Input text={name} placeholder={"name"}/>
                </ElContainer>
                <ElContainer>
                    <P>Desctiption</P>
                    <Input text={desc} placeholder={"description"}/>
                </ElContainer>
                <ElContainer>
                    <P>Category</P>
                    <Input text={category} placeholder={"Category"}/>
                </ElContainer>
                <ElContainer>
                    <P>Price</P>
                    <Input text={price} placeholder={"Price"}/>
                </ElContainer>
                <ElContainer>
                    <P>Phone number</P>
                    <Input text={phone} placeholder={"Phone number"}/>
                </ElContainer>
                <ElContainer>
                    <P>Image</P>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <InputImage text={img.Main} placeholder={"Main"}/>
                        <InputImage text={img.Front} placeholder={"Front"}/>
                        <InputImage text={img.Back} placeholder={"Back"}/>
                    </div>
                </ElContainer>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <div style={{width: "100%", marginRight: 50}}>
                    <Button func={() => props.close()} text="Save"/>
                    </div>
                    <div style={{width: "100%"}}>
                    <Button func={() => props.close()} text="Cancel"/>
                    </div>
                </div>
            </Content>
        </Modal>
    )
}


export default ProductModalSetting