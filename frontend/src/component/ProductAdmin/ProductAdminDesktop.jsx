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
    width: 70px;
    height: 70px;
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
    const {categoryList, Deleted, func, el, ChangeQuantity} = props.props;
    const [isShowStock, showStock] = useState(false);
    const [isShowSetting, showSetting] = useState(false);
    return(
        <ProductCart>
            <P>№{el?.product_id}</P>
            <Img src={el?.main_img}/>
            <P>{el?.name}</P>
            <P>{categoryList ? categoryList[el?.category_id]?.name : null}</P>
            <P>{el?.price}$</P>
            <div style={{marginLeft: "auto"}}>
                <StockButton onClick={() => showStock(true)}/>
                <SettingButton onClick={() => showSetting(true)}/>
                <DeleteButton onClick={() =>  Deleted(el.product_id)} />
            </div>
            <ProductModalStock 
                id={el?.product_id} 
                name={el?.name} 
                oneSize={el?.is_one_size} 
                total={el?.quantity_total} 
                s={el?.quantity_s} 
                m={el?.quantity_m} 
                l={el?.quantity_l} 
                xl={el?.quantity_xl}
                isShow={isShowStock} 
                ChangeQuantity={ChangeQuantity}
                close={() => showStock(false)} 
            />
            <ProductModalSetting 
                data={el}
                category={el?.category_id}
                id = {el?.product_id} 
                img = {el? {main_img: el.main_img, front_img: el.front_img, back_img: el.back_img} : null} 
                name = {el?.name} 
                desc = {el?.desc}
                price = {el?.price} 
                Deleted = {Deleted}
                is_one_size = {el?.is_one_size}
                categoryList={categoryList} 
                isNew={false} 
                func={func}
                close={() => showSetting(false)}
                isShow={isShowSetting}
            />
        </ProductCart>
    )
}

export default ProductAdminDesktop