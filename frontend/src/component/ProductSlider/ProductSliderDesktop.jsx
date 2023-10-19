import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px; 
`

const MainCointainer = styled.div`
    display: flex;
`

const OtherCointainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-column-gap: 23px;
    padding-top: 23px;
`

const MainImg = styled.img`
    width: 450px;
    height: 450px;
    border: 1px solid black;
`

const OtherImg = styled.img`
    width: 70px;
    height: 70px;
    border: 1px solid black;
    filter: ${props => props.active ? "opacity(50%)" : ""};
`

const Button = styled.button`
    position: relative;
    background-color: transparent;
    font-size: 64px;
    border: none;
    color: ${props => props.active ? "var(--gray-element)" : "black"};
`

const LeftButtom = styled(Button)`
    left: 40px;
    &:hover{
        cursor: pointer;
    }
`
const RightButtom = styled(Button)`
    right: 40px;
    &:hover{
        cursor: pointer;
    }
`

function ProductSliderDesktop(props) {
    const {img} = props.props;
    const [nowImg, setImg] = useState(0);
    return(
        <ProductSlider>
            <MainCointainer>
                <LeftButtom active={nowImg === 0? true : false} onClick={() => setImg(nowImg - 1 < 0? nowImg : nowImg - 1)}>&lsaquo;</LeftButtom>
                <MainImg src={img[nowImg]} alt="img"/>
                <RightButtom active={nowImg === img.length - 1? true : false} onClick={() => setImg(nowImg + 1 > img.length - 1? nowImg : nowImg + 1)}>&rsaquo;</RightButtom>
            </MainCointainer>
            <OtherCointainer>
                {img.map((el, i) => {
                    return(<OtherImg active={nowImg === i} src={el} alt={el} onClick={() => setImg(i)}/>)
                })}
            </OtherCointainer>
        </ProductSlider>
    )
}

export default ProductSliderDesktop