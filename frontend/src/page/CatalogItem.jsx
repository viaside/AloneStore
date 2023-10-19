import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import ProductSlider from "../component/ProductSlider/ProductSlider";
import SizeSelector from "../component/SizeSelector/SizeSelector";
import Counter from "../component/Counter/Counter";
import Button from "../component/Button/Button";
import ProductCartMini from "../component/ProductCartMini/ProductCartMini";

const ProductCart = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: ${props => props.isMobile? "column" : "row"};
`

const Other = styled.div`
    max-width: 100%;
    display: ${props => props.isMobile? "grid" : "flex"};
    grid-template-columns: 1fr;
    justify-content: space-evenly;
    align-items: ${props => props.isMobile? "center" : "flex-end"};
`

const ProductCartInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const ProductCartFunc = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const TextSmall = styled.p`
    font-size: var(--font-small);
    text-align: center;
    padding: 0px;
    margin: 0px;
`
const TextMedium = styled.p`
    font-size: var(--font-medium);
    text-align: center;
    padding: 0px;
    margin: 0px;
`
const TextBig = styled.p`
    font-size: var(--font-big);
    text-align: center;
    padding: 0px;
    margin: 0px;
`

const VerticalText = styled.p`
    position: ${props => props.isMobile? "absolute" : "relative"};
    left: 0;
    bottom: ${props => props.isMobile? "-100px" : ""};
    height: 0px;
    width: 0px;
    font-size: var(--font-big);
    transform: rotate(-90deg);
    color: #797979;
    font-family: TrixiePro;
    font-size: 32px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
    letter-spacing: 32px;    
`

function CatalogItem() {
    const params = useParams();
    const { state } = useLocation();
    const [Data, setData] = useState([]);
    const [Count, setCount] = useState(1);
    const [Size, setSize] = useState(null);
    const [OtherData, setOtherData] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    useEffect(() => {UpdateCatalog(); UpdateOther()}, []);
    useEffect(() => {UpdateCatalog(); UpdateOther()}, [state]);

    function UpdateCatalog(){
        fetch(`/products/${state}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(async (data) => {
            setData(data[0]);
        })
        .catch((error) => console.log(error));
    }

    function UpdateOther(){
        fetch(`/products/`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(async (data) => {
            setOtherData(data);
        })
        .catch((error) => console.log(error));
    }

    function AddCart() {
        fetch('/cartDetailUserId/'+ localStorage.getItem("userId"),{method:'GET'})
        .then((response) => response.json())
        .then(result => {
            const CartId = result[0].id;
            localStorage.setItem("cartId", CartId);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({cart_id: CartId, product_id: Data.id, quantity: Count, size: Size, total_price: Data.price*Count})
            };
            fetch(`/cartDetail`, requestOptions)
            .then(res => {
                if(res.status >= 400){
                    res?.json().then((e) => {
                        alert(e.message)
                    })    
                } else{
                    alert("Add to cart")
                }
            })
        })
    }
    
    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "MobileContainer" : "Container"}>
            <ProductCart isMobile={isMobile}>
                <ProductSlider isMobile={isMobile} img={[Data.main_img, Data.front_img, Data.back_img]}/>
                <ProductCartInfo>
                    <TextBig>{Data.name}</TextBig>
                    <TextMedium style={{color: "var(--gray-text)"}}>{Data.category}</TextMedium>
                    <TextBig>{Data.price}$</TextBig>
                    <br />
                    {!Data.is_one_size? 
                    <SizeSelector setSize={setSize} S={Data.quantity_s !== 0} M={Data.quantity_m !== 0} L={Data.quantity_l !== 0} XL={Data.quantity_xl !== 0}/>
                    : <TextSmall style={{color: "var(--gray-text)"}}>Total quantity: {Data.quantity_total}</TextSmall>}
                    <ProductCartFunc>
                        <Counter DefaultCount={1} Count={Count} SetCount={setCount}/>
                        <Button onClick={() => AddCart()}>Buy</Button>
                    </ProductCartFunc>
                    <TextSmall style={{color: "var(--gray-text)"}}>{Data.desc}</TextSmall>
                </ProductCartInfo>
            </ProductCart>
            <hr />
            <Other isMobile={isMobile}>
                <VerticalText isMobile={isMobile}>Other</VerticalText>
                {OtherData.map((el, id) => {
                    return <ProductCartMini key={id} id={el.product_id} img={el.main_img} name={el.name} price={el.price}/>
                })}
            </Other>
        </div>
    )
}

export default CatalogItem