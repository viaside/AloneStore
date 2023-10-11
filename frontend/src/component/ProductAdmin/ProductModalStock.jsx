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
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return(
        <Modal show={props.isShow}>
            <Content isMobile={isMobile}>
                    <h1>{name}</h1>
                <SizeContainer>
                    <P>Total count</P>
                    <Input text={total} placeholder={"number"}/>
                </SizeContainer>
                {oneSize? 
                    <SizeContainer>
                        <SizeElContainer>
                            <P>S -</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input text={s} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                        <SizeElContainer>
                            <P>M -</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input text={m} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                        <SizeElContainer>
                            <P>L -</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input text={l} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                        <SizeElContainer>
                            <P>XL-</P>
                            <div style={{maxWidth: "50%"}}>
                                <Input text={xl} placeholder={null}/>
                            </div>
                        </SizeElContainer>
                    </SizeContainer>
                    :
                    null
                }
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


export default ProductModalCount