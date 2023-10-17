import React from "react";
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
    display: ${props => props.isMobile? "grid" : "flex"};
    grid-template-columns: 1fr 1fr;
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
    width: 65%;
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
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return (
        <div className={useMediaQuery({ query: '(max-width: 750px)' })? "" : "Container"}>
            <ProductCart isMobile={isMobile}>
                <ProductSlider isMobile={isMobile} img={[0,1,2,3,4]}/>
                <ProductCartInfo>
                    <TextBig>{params.name}</TextBig>
                    <TextMedium style={{color: "var(--gray-text)"}}>Category</TextMedium>
                    <TextBig>400$</TextBig>
                    <br />
                    <SizeSelector XS={0} S={0} M={1} L={1} XL={0}/>
                    <ProductCartFunc>
                        <Counter/>
                        <Button func={() => alert("Bought")}>Buy</Button>
                    </ProductCartFunc>
                    <TextSmall style={{color: "var(--gray-text)"}} >
                        Премиум футер петля (340гр), 80% хлопок<br/>
                        - Size M / L<br/>
                        - Унисекс<br/>
                        - Печать + Вышивка<br/>
                        - Доставка: Почта России<br/>
                        Рекомендации по выбору размера:<br/>
                        М - рост 165-175 см<br/>
                        L - рост 175-185 см
                    </TextSmall>
                </ProductCartInfo>
            </ProductCart>
            <hr />
            <Other isMobile={isMobile}>
                <VerticalText isMobile={isMobile}>Other</VerticalText>
                <ProductCartMini id={1} name="product 1" price="400"/>
                <ProductCartMini id={2} name="product 2" price="400"/>
                <ProductCartMini id={3} name="product 3" price="400"/>
                <ProductCartMini id={4} name="product 4" price="400"/>
                <ProductCartMini id={5} name="product 5" price="400"/>
            </Other>
        </div>
    )
}

export default CatalogItem