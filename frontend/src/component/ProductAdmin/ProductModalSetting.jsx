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
    const {id, name, desc, category, categoryList, price, is_one_size, img, isNew, func} = props;
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    
    const [Name, setName] = useState(name); 
    const [Desc, setDesc] = useState(desc); 
    const [Category, setCategory] = useState(category? category : 0); 
    const [Price, setPrice] = useState(price); 
    const [Img, setImg] = useState(img);   
    const [isOneSize, setOneSize] = useState(is_one_size? is_one_size : false); 
    return(
        <Modal show={props.isShow}>
            <Content isMobile={isMobile}>
                <h1>{name}</h1>
                <ElContainer>
                    <P>Name</P>
                    <Input name="Name" value={Name} onChange={(e) => setName(e.target.value)} text={name} placeholder={"name"}/>
                </ElContainer>
                <ElContainer>
                    <P>Description</P>
                    <Input name="Desc" value={Desc} onChange={(e) => setDesc(e.target.value)} text={desc} placeholder={"description"}/>
                </ElContainer>
                <ElContainer>
                    <P>Category</P>
                    <select defaultValue={0} name="" id="" value={category} style={{fontSize: 24, padding: "5px 20px"}} onChange={(e) => setCategory(e.target.value)}>
                        {categoryList? categoryList.map((el, i) => {
                            return <option value={el.id} key={i}>{el.name}</option>
                        }): null}
                    </select>
                </ElContainer>
                <ElContainer>
                    <P>Price</P>
                    <Input name="Price" value={Price} onChange={(e) => setPrice(e.target.value)} text={price} placeholder={"Price"}/>
                </ElContainer>
                <ElContainer>
                    <P>Is one size?
                    <Input name="Size" onChange={(e) => setOneSize(!isOneSize)} type="checkbox" checked={isOneSize}/></P>
                </ElContainer>
                <ElContainer>
                    <P>Image</P>
                    <div style={{display: "flex"}}>
                        <InputImage name="main_img" type="file" accept=".png,.jpg,.jpeg,.gif"  src={Img?.main_img} onChange={setImg } Img={Img} alt={"main"}/>
                        <InputImage name="front_img" type="file" accept=".png,.jpg,.jpeg,.gif" src={Img?.front_img} onChange={setImg   } Img={Img} alt={"front"}/>
                        <InputImage name="back_img" type="file" accept=".png,.jpg,.jpeg,.gif"  src={Img?.back_img} onChange={setImg } Img={Img} alt={"back"}/>
                    </div>
                </ElContainer>
                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <div style={{width: "100%", marginRight: 50}}>
                    <Button onClick={() => {props.close(); func(id, isNew, Name, Desc, Category, Price, Img?.main_img, Img?.front_img, Img?.back_img, isOneSize)}}>Save</Button>
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