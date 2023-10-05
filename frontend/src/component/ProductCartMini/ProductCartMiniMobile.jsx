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
    width: 100px;
    height: 100px;
`

const P = styled.p`
    font-size: 20px;
    padding: 0px;
    margin: 0px;
`

function ProductCartMiniMobile(props) {
    const {id ,img, name, price} = props.props;

    return(
        <ProductCart to={`../Catalog/${name}`} state={id} onClick={() => ScrollToTop()}>
            <Img src={img}/>
            <P>{name}</P>
            <P>{price}$</P>
        </ProductCart>
    )
}

export default ProductCartMiniMobile
