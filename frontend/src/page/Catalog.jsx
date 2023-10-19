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
    flex-wrap: ${props => props.isMobile? "wrap" : ""};
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
                <FilterButton active={ NowFilter === 0 ? true : false} onClick={() => SetFilter(0)}>T-Shirt</FilterButton>
                <FilterButton active={ NowFilter === 1 ? true : false} onClick={() => SetFilter(1)}>Pants</FilterButton>
                <FilterButton active={ NowFilter === 2 ? true : false} onClick={() => SetFilter(2)}>Hoodie</FilterButton>
                <FilterButton active={ NowFilter === 3 ? true : false} onClick={() => SetFilter(3)}>Cap</FilterButton>
                <FilterButton active={ NowFilter === 4 ? true : false} onClick={() => SetFilter(4)}>Shoes</FilterButton>
                <FilterButton active={ NowFilter === 5 ? true : false} onClick={() => SetFilter(5)}>Bag</FilterButton>
            </Filter>
            <CalalogList isMobile={isMobile}>
                {Data.map((el, i) => {
                    console.log(el.category_id)
                    if(NowFilter === "All"? true : el.category_id === NowFilter){
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