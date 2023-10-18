import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const ProductCart = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px; 
    &:hover{
        cursor: pointer;
    }
    text-decoration: none;
    color: black;
`

const Img = styled.img`
    width: 280px;
    height: 280px;
`

const P = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`

function ProductCartDesktop(props) {
    const {id, img, name, price} = props.props;
    console.log(img)
    return(
        <ProductCart to={`${name}`} state={name} >
            <Img src={'data:image/jpg;base64,' + btoa(img)}/>
            <P>{name}</P>
            <P>{price}$</P>
        </ProductCart>
    )
}

export default ProductCartDesktop