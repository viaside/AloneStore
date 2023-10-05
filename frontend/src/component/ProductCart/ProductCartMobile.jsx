import styled from "styled-components";
import {Link} from 'react-router-dom';

const ProductCart = styled(Link)     `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px; 
    &:hover{
        cursor: pointer;
    }
    text-decoration: none;
    color: black;
`

const Img = styled.img`
    width: 150px;
    height: 150px;
`

const P = styled.p`
    font-size: 20px;
    padding: 0px;
    margin: 0px;
`

function ProductCartMobile(props) {
    const {id, img, name, price} = props.props;

    return(
        <ProductCart to={`${name}`} state={name}>
            <Img src={img}/>
            <P>{name}</P>
            <P>{price}$</P>
        </ProductCart>
    )
}

export default ProductCartMobile
