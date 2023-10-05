import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

import ScrollToTop from "../../resurses/ScrollToTop";

const ProductCart = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px; 
    text-decoration: none;
    color: black;
`

const Img = styled.img`
    width: 170px;
    height: 170px;
`

const P = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 0px;
`

function ProductCartMiniDesktop(props) {
    const {id, img, name, price} = props.props;

    return(
        <ProductCart to={`../Catalog/${name}`} state={id} onClick={() => ScrollToTop()}>
            <Img src={img}/>
            <P>{name}</P>
            <P>{price}$</P>
        </ProductCart>
    )
}

export default ProductCartMiniDesktop