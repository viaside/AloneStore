import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

import {ReactComponent as DeleteIcon} from "../../icon/delete.svg";
import CounterMini from "../CounterMini/CounterMini";


const Order = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0px 5px;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
`

const Img = styled.img`
    width: 70px;
    height: 70px;
`

const P = styled.p`
    font-size: var(--font-medium);
    padding: 0px 20px;
    margin: 0px;
`


function OrderUserDesktop(props) {
    const {id, date, status, fullName, PhoneNumber, address, products, Desc} = props.props;

    return(
        <Order>
            <div>
                <div>
                    <P>Order by {date}</P>
                    <P>{id}</P>
                </div>
                <div>
                    <P>Status: {status}</P>
                    <P>Total price: {status}$</P>
                </div>
            </div>
            <div>
                <div>
                    <P>Details</P>
                    {products.map((el, i) => {
                        return(
                            <div id={i}>
                                <img src={el.img} alt="1" />
                                <P>{el.name}</P>
                                <P>size: {el.size}</P>
                                <P>{el.price}$</P>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <P>Description</P>
                    <P>{Desc}</P>
                </div>
            </div>
            <div>
                <P>{fullName}</P>
                <P>{address}</P>
            </div>
        </Order>
    )
}

export default OrderUserDesktop