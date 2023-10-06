import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import ProductCart from "../component/ProductCart/ProductCart";

let Products = [
        {
            id: 1,
            Img: '1',
            Name: "Hoddie 2",
            Price: "400",
            Category: "Hoodie",
        },
        {
            id: 2,
            Img: '1',
            Name: "T-Shirt 1",
            Price: "400",
            Category: "T-Shirt",
        },
        {
            id: 3,
            Img: '1',
            Name: "Hoodie 1",
            Price: "400",
            Category: "Hoodie",
        },
        {
            id: 4,
            Img: '1',
            Name: "Pants",
            Price: "400",
            Category: "Pants",
        },
        {
            id: 5,
            Img: '1',
            Name: "Cap ",
            Price: "400",
            Category: "Cap",
        },
        {
            id: 6,
            Img: '1',
            Name: "T-Shirt 2",
            Price: "400",
            Category: "T-Shirt",
        }
]; 

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
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    
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
                {Products.map((el, i) => {
                    if(NowFilter === "All"? true : el.Category === NowFilter){
                        return(
                            <ProductCart id={i} img={el.Img} name={el.Name} price={el.Price} onClick={() => window.location.pathname = `/${el.id}`}/>
                        )
                    }
                })}
            </CalalogList>
        </Container>
    )
}

export default Catalog