import React, { useState } from "react";
import styled from "styled-components";

import {ReactComponent as DeleteIcon} from "../../icon/delete.svg";
import {ReactComponent as ArrowIcon} from "../../icon/arrow.svg";
import {ReactComponent as SettingIcon} from "../../icon/setting.svg";


const Order = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    padding: 10px;
`

const Info = styled.div`
    display: grid;
    align-items: center;
    width: 100%;
    grid-template-columns: repeat(6, auto);
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border: solid gray 1px;
    margin-right: 20px;
`

const P = styled.p`
    font-size: var(--font-medium);
    margin: 0px;
    display: flex;
`

const PGray = styled.p`
    font-size: var(--font-medium);
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

const Select = styled.select`
    font-size: var(--font-small);
    width: 150px;
` 


function OrderUserDesktop(props) {
    const {id, date, status, statusId,userName, totalPrice,fullName, phoneNumber, address, products, Desc, func} = props.props;
    const [isShow, Show] = useState(false);

    return(
        <Order>
            <Info>
                <P>{id}</P>
                <P>{userName}</P>
                <p>{address}</p>
                <P>{date}</P>
                <P>{totalPrice}$</P>
                <Select name="status" value={statusId} onChange={(e) => func(id, e.target.value)}>
                    <option value="0" >Created</option>    
                    <option value="1" >Delivery</option>    
                    <option value="2" >Closed</option>    
                </Select>
            </Info>
            {isShow? 
            <div>
                <P><PGray>Full name: </PGray> {fullName}</P>
                <P><PGray>Phone number: </PGray> {phoneNumber}</P>
                <P>Details</P>
                <div>
                    {products?.map((el, i) => {
                        return(
                            <div id={i} style={{display: "flex", justifyContent: "space-around"}}>
                                <div style={{display: "flex"}}>
                                    <Img src={el.main_img} alt="1" />
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
            </div>
            : null}
            <ButtonArrow Active={isShow} onClick={() => Show(!isShow)}/>
        </Order>
    )
}

export default OrderUserDesktop