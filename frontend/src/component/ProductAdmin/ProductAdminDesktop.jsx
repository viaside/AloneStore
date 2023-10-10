import React, { useState } from "react";
import styled from "styled-components";

import {ReactComponent as StockIcon} from "../../icon/stock.svg";
import {ReactComponent as SettingIcon} from "../../icon/setting.svg";
import {ReactComponent as DeleteIcon} from "../../icon/delete.svg";
import ProductModalStock from "./ProductModalStock";
import ProductModalSetting from "./ProductModalSetting";


const ProductCart = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6, 2fr);
    height: 100px;
    padding: 0px 5px;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
`

const Img = styled.img`
    width: 45px;
    height: 45px;
`

const P = styled.p`
    font-size: var(--font-medium);
    padding: 0px 20px;
    margin: 0px;
`

const DeleteButton = styled(DeleteIcon)`
    width: 28px;
    height: 28px;
    &:hover{
        cursor: pointer;
    }
`
const SettingButton = styled(SettingIcon)`
    width: 28px;
    height: 28px;
    &:hover{
        cursor: pointer;
    }
`
const StockButton = styled(StockIcon)`
    width: 30px;
    height: 30px;
    &:hover{
        cursor: pointer;
    }
`

function ProductAdminDesktop(props) {
    const {id, img, name, category, price, Deleted} = props.props;
    const [isShowStock, showStock] = useState(false);
    const [isShowSetting, showSetting] = useState(false);

    return(
        <ProductCart>
                <P>№{id}</P>
                <Img src={img}/>
                <P>{name}</P>
                <P>{category}</P>
                <P>{price}$</P>
                <div style={{marginLeft: "auto"}}>
                    <StockButton onClick={() => showStock(true)}/>
                    <SettingButton onClick={() => showSetting(true)}/>
                    <DeleteButton onClick={() => Deleted()} />
                </div>
                <ProductModalStock 
                    id={id} name={name} oneSize={true} total={1000} s={200} m={200} l={200} xl={400}
                    isShow={isShowStock} close={() => showStock(false)}
                />
                <ProductModalSetting 
                    id={id} name={name} desc={"nice t-shirt"} category={"t-shirt"} price={400} phone={"+7(999)999-99-99"} img={{main: '1', front: '2', back: '3'}}
                    isShow={isShowSetting} close={() => showSetting(false)}
                />
        </ProductCart>
    )
}

export default ProductAdminDesktop