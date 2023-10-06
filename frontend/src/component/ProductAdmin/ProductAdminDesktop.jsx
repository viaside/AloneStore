import React from "react";
import styled from "styled-components";

import {ReactComponent as StockIcon} from "../../icon/stock.svg";
import {ReactComponent as SettingIcon} from "../../icon/setting.svg";
import {ReactComponent as DeleteIcon} from "../../icon/delete.svg";


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

    return(
        <ProductCart>
                <P>№{id}</P>
                <Img src={img}/>
                <P>{name}</P>
                <P>{category}</P>
                <P>{price}$</P>
                <div style={{marginLeft: "auto"}}>
                    <StockButton onClick={() => Deleted()} />
                    <SettingButton onClick={() => Deleted()} />
                    <DeleteButton onClick={() => Deleted()} />
                </div>
        </ProductCart>
    )
}

export default ProductAdminDesktop