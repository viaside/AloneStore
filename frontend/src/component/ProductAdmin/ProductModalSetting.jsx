import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Input from "../Input/Input";
import InputImage from "../InputImage/InputImage";
import Button from "../Button/Button";
import { useMediaQuery } from "react-responsive";

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
    width: ${props => props.isMobile? "80%" : "50%"};
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
    const {id, name, desc, category, price, img, isNew, func} = props;
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    
    const [Name, setName] = useState(null); 
    const [Desc, setDesc] = useState(null); 
    const [Category, setCategory] = useState(null); 
    const [Price, setPrice] = useState(null); 
    const [Img, setImg] = useState(null); 

    const HandleChange = (event) => {
        switch (event.target.name) {
            case "Name":
                setName(event.target.value);
                break;
            case "Desc": 
                setDesc(event.target.value);
                break;
            case "Category": 
                setCategory(event.target.value);                   
                break;
            case "Price": 
                setPrice(event.target.value);
                break;
            case "Img":
                setImg(event.target.value);
                break;
            default:
                break;
        }
    }
    
    return(
        <Modal show={props.isShow}>
            <Content isMobile={isMobile}>
                <h1>{name}</h1>
                <ElContainer>
                    <P>Name</P>
                    <Input name="Name" value={Name} onChange={HandleChange} text={name} placeholder={"name"}/>
                </ElContainer>
                <ElContainer>
                    <P>Desctiption</P>
                    <Input name="Desc" value={Desc} onChange={HandleChange} text={desc} placeholder={"description"}/>
                </ElContainer>
                <ElContainer>
                    <P>Category</P>
                    <Input name="Category" value={Category} onChange={HandleChange} text={category} placeholder={"Category"}/>
                </ElContainer>
                <ElContainer>
                    <P>Price</P>
                    <Input name="Price" value={Price} onChange={HandleChange} text={price} placeholder={"Price"}/>
                </ElContainer>
                <ElContainer>
                    <P>Image</P>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <InputImage text={img?.Main} placeholder={"Main"}/>
                        <InputImage text={img?.Front} placeholder={"Front"}/>
                        <InputImage text={img?.Back} placeholder={"Back"}/>
                    </div>
                </ElContainer>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <div style={{width: "100%", marginRight: 50}}>
                    <Button onClick={() => {props.close(); func(isNew, Name, Desc, Category, Price, Img)}}>Save</Button>
                    </div>
                    <div style={{width: "100%"}}>
                    <Button onClick={() => props.close()}>Cancel</Button>
                    </div>
                </div>
            </Content>
        </Modal>
    )
}


export default ProductModalSetting