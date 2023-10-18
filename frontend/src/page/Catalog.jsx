import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import ProductCart from "../component/ProductCart/ProductCart";

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.isMobile? "column" : "row"};
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    flex-direction: ${props => props.isMobile? "row" : "column"};
    justify-content: ${props => props.isMobile? " center" : ""};
` 

const FilterButton = styled.div`
    background-color: 0;
    padding-bottom: 15px;
    padding-right: 15px;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    };
    color: ${props => props.active ? "Black" : "var(--gray-element)"};
`   

const CalalogList = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.isMobile? "2" : "3"}, 1fr);
    grid-column-gap: ${props => props.isMobile? "0" : "100"}px;
    grid-row-gap: ${props => props.isMobile? "0" : "10"}px;
`


function Catalog() {
    const [NowFilter, SetFilter] = useState("All");
    const [Data, setData] = useState([]);
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    
    useEffect(() => {UpdateCatalog()}, []);

    function UpdateCatalog(){
        fetch(`/products`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then(async (data) => {
            setData(data);
        })
        .catch((error) => console.log(error));
    }

    return (
        <Container isMobile={isMobile} className={useMediaQuery({ query: '(max-width: 750px)' })? "MobileContainer" : "Container"}>
            <Filter isMobile={isMobile}>
                <FilterButton active={ NowFilter === "All" ? true : false} onClick={() => SetFilter("All")}>All</FilterButton>
                <FilterButton active={ NowFilter === "Hoodie" ? true : false} onClick={() => SetFilter("Hoodie")}>Hoodie</FilterButton>
                <FilterButton active={ NowFilter === "T-Shirt" ? true : false} onClick={() => SetFilter("T-Shirt")}>T-Shirt</FilterButton>
                <FilterButton active={ NowFilter === "Pants" ? true : false} onClick={() => SetFilter("Pants")}>Pants</FilterButton>
                <FilterButton active={ NowFilter === "Cap" ? true : false} onClick={() => SetFilter("Cap")}>Cap</FilterButton>
            </Filter>
            <CalalogList isMobile={isMobile}>
                {Data.map((el, i) => {
                    if(NowFilter === "All"? true : el.Category === NowFilter){
                        return(
                            <ProductCart id={el.product_id} img={el.main_img} name={el.name} price={el.price} onClick={() => window.location.pathname = `/${el.id}`}/>
                        )
                    }
                })}
            </CalalogList>
        </Container>
    )
}

export default Catalog