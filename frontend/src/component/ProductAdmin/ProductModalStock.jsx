import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Input from "../Input/Input";
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
const SizeContainer = styled.div`
    display: grid;
 `

const SizeElContainer = styled.div`
    display: flex; 
    align-items: center;
    max-width: 100%;
s `

 const P = styled.p`
    font-size: 24px;
    margin-right: 10px;
 `

function ProductModalCount(props){
    const {id, name, oneSize, total, s, m, l, xl} = props;
    const [Total, setTotal] = useState(total);
    const [S, setS] = useState(s);
    const [M, setM] = useState(m);
    const [L, setL] = useState(l); 
    const [XL, setXL] = useState(xl);
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    const HandleChange = (event) => {
        switch (event.target.name) {
            case "total":
                setTotal(event.target.value);
                break;
            case "S": 
                setS(event.target.value);
                break;
            case "M": 
                setM(event.target.value);                   
                break;
            case "L": 
                setL(event.target.value);
                break;
            case "XL":
                setXL(event.target.value);
                break;
            default:
                break;
        }
    }

    return(
        <Modal show={props.isShow}>
            <Content isMobile={isMobile}>
                    <h1>{name}</h1>
                <SizeContainer>
                    <P>Total count</P>
                    <Input name="total" value={Total} onChange={(e) => HandleChange(e)} text={total} placeholder={"number"}/>
                </SizeContainer>
                {!oneSize? 
                    <SizeContainer>
                        <SizeElContainer>
                            <P>S -</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input name="S" text={s} value={S} onChange={(e) => HandleChange(e)} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                        <SizeElContainer>
                            <P>M -</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input name="M" text={m} value={M} onChange={(e) => HandleChange(e)} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                        <SizeElContainer>
                            <P>L -</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input name="L" text={l} value={L} onChange={(e) => HandleChange(e)} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                        <SizeElContainer>
                            <P>XL-</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input name="XL" text={xl} value={XL} onChange={(e) => HandleChange(e)} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                    </SizeContainer>
                    :
                    <br/>
                }
                <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
                    <div style={{width: "100%", marginRight: 50}}>
                    <Button onClick={() => {props.close(); props.ChangeQuantity(id, Total, S, M, L, XL)}}>Save</Button>
                    </div>
                    <div style={{width: "100%"}}>
                    <Button onClick={() => props.close()}>Close</Button>
                    </div>
                </div>
            </Content>
        </Modal>
    )
}


export default ProductModalCount