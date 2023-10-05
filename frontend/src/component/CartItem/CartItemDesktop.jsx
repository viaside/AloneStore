import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

import {ReactComponent as DeleteIcon} from "../../icon/delete.svg";
import CounterMini from "../CounterMini/CounterMini";


const ProductCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    width: 70px;
    height: 70px;
`

const P = styled.p`
    font-size: var(--font-medium);
    padding: 0px 20px;
    margin: 0px;
`

const DeleteButton = styled(DeleteIcon)`
    width: 20px;
    height: 20px;
    &:hover{
        cursor: pointer;
    }
`

function CartItemDesktop(props) {
    const {id, img, name, price, count, size, Deleted} = props.props;

    return(
        <ProductCart>
            <FlexDiv>
                <Img src={img}/>
                <div>
                    <P>{name}</P>
                    <P style={{fontSize: "var(--font-small)"}}>Size: {size}</P>
                </div>
            </FlexDiv>
            <FlexDiv>
                <CounterMini isMobile={false} DefaultCount={count}/>
                <P>{price}$</P>
                <DeleteButton onClick={() => Deleted()} />
            </FlexDiv>
        </ProductCart>
    )
}

export default CartItemDesktop