import React, { useState } from "react";
import styled from "styled-components";

import {ReactComponent as DeleteIcon} from "../../icon/delete.svg";
import {ReactComponent as ArrowIcon} from "../../icon/arrow.svg";


const Order = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border: solid gray 1px;
    margin-right: 20px;
`

const P = styled.p`
    font-size: var(--font-small);
    margin: 2px 0px;
    display: flex;
`

const PGray = styled.p`
    font-size: var(--font-small);
    color: #ABAAAA;
    margin: 0px;
    padding: 0px;
    padding-right: 5px;
`

const ButtonArrow = styled(ArrowIcon)`
    transform: scale(${props => props.Active? "1, -1" : "-1, 1"});
    transition: 0.5s;
    &:hover{
        cursor: pointer;
    }
    border: none;
    background: none;
    font-size: 35px;
    width: 20px;
    height: 20px;
    margin-left: auto;
`

function OrderUserMobile(props) {
    const {id, date, status, totalPrice,fullName, phoneNumber, address, products, Desc} = props.props;
    const [isShow, Show] = useState(false);

    return(
        <Order>
            <P><PGray>Order by: </PGray> {date}</P>
            <P><PGray>№</PGray>{id}</P>
            <P><PGray>Status: </PGray> {status}</P>
            <P><PGray>Total price: </PGray> {totalPrice}$</P>
            {isShow? 
                <>
                <P><PGray>Full name: </PGray> {fullName}</P>
                <P><PGray>Address: </PGray> {address}</P>
                <P><PGray>Phone number: </PGray> {phoneNumber}</P>
                <P>Details</P>
                <div>
                    {products.map((el, i) => {
                        return(
                            <div id={i} style={{display: "flex", justifyContent: "space-between"}}>
                                <div style={{display: "flex"}}>
                                    <Img src={el.img} alt="1" />
                                    <P style={{paddingRight: 40}}>{el.name}</P>
                                </div>
                                <P style={{paddingRight: 40}}>size: {el.size}</P>
                                <P style={{paddingRight: 40}}>{el.price}$</P>
                            </div>
                        )
                    })}
                </div>
                <P>Description</P>
                <P style={{fontSize: 16}}>{Desc}</P>
            </>
            : null}
            <ButtonArrow Active={isShow} onClick={() => Show(!isShow)}/>
        </Order>
    )
}

export default OrderUserMobile