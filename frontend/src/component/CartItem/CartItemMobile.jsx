import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

import {ReactComponent as DeleteIcon} from "../../icon/delete.svg";
import CounterMini from "../CounterMini/CounterMini";


const ProductCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100px;
    padding: 0px 5px;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
`

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width: 50px;
    height: 50px;
`

const P = styled.p`
    font-size: var(--font-small);
    padding: 0px 10px;
    margin: 0px;
`

const DeleteButton = styled(DeleteIcon)`
    width: 20px;
    height: 20px;
    &:hover{
        cursor: pointer;
    }
`

function CartItemMobile(props) {
    const {id, img, name, price, count, size, Deleted} = props.props;

    return(
        <ProductCart>
            <FlexDiv>
                <Img src={img}/>
                <div>
                    <P>{name}</P>
                    <P style={{fontSize: "var(--font-small)-2"}}>Size: {size}</P>
                </div>
            </FlexDiv>
            <FlexDiv>
                <CounterMini isMobile={true} DefaultCount={count}/>
                <P>{price}$</P>
                <DeleteButton onClick={() => Deleted()} />
            </FlexDiv>
        </ProductCart>
    )
}

export default CartItemMobile