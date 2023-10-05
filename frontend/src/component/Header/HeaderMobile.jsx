import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import {ReactComponent as Logo} from "../../icon/logo.svg";
import {ReactComponent as NavButton} from "../../icon/navbutton.svg";

const showModal = keyframes`
  100% { transform: translateX(0%); }
`;

const hideModal = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-150%); }
`;

const Header = styled.div`
    display: flex;
    border-bottom: 2px solid #DBDBDB;
    background: #FFF;
    height: 50px;
    width: 100%;
    top: 0px;

`
const Container = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    align-items: center;
`

const Navigation = styled.div`
    z-index: 10;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    transform: translateX(-150%);
    background-color: white;
    animation: ${props => props.out !== null? props.out? showModal : hideModal : null} 0.5s forwards;
`

const Link = styled.a`
    margin: 30px 0;
    padding: 0px 5px 5px 5px;
    font-size: var(--font-medium);
    text-decoration: none;
    color: var(--black);
    &:hover{
        color: var(--gray-text);
    }
    background-color: ${props => props.here? "var(--gray-element)" : "none"};
    border-radius: ${props => props.here? "20px" : "none"};
    background-color: ${props => props.here? "var(--gray-element)" : "none"};
`

const Button = styled.a`
    font-size: 50px;
    position: absolute;
    vertical-align: center;
    left: 0px;
    top: 0px;
    padding: 10px;
    &:hover{
        color: var(--gray-text);
    }
`

function HeaderMobile() {
    const [isShowNav, ShowNav] = useState(null);

    return(
        <Header>
            <Container>
                <Logo style={{height: "50px", position: "absolute", right: "0px", left: "0px", margin:"0 auto"}}/>
                <NavButton style={{height: "30px"}} onClick={() => ShowNav(true)}/>
            </Container>
            <Navigation out={isShowNav}>
                <Button onClick={() => ShowNav(false)}>X</Button>
                <Logo style={{height: "100px"}}/>
                <Link here={window.location.pathname === "/"? true : false} href="/">Main</Link>
                <Link here={window.location.pathname === "/Catalog"? true : false} href="/Catalog">Catalog</Link>
                <Link here={window.location.pathname === "/About"? true : false} href="/About">About</Link>
                <Link here={window.location.pathname === "/Cart"? true : false} href="/Cart">Cart</Link>
                <Link here={window.location.pathname === "/Profile"? true : false} href="/Profile">Profile</Link>
            </Navigation>
        </Header>
    )
}

export default HeaderMobile
