import React from "react";
import styled from "styled-components";

import {ReactComponent as Logo} from "../../icon/logo.svg";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #DBDBDB;
    background: #FFF;
    height: 60px;
    width: 100%;
    top: 0px;
`

const Container = styled.div`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Link = styled.a`
    font-size: var(--font-medium);
    text-decoration: none;
    color: var(--black);
    padding-right: 60px;
    &:hover{
        color: var(--gray-text);
    }
`

function HeaderDesktop() {
    return(
        <Header>
            <Container>
                <div>
                    <Link href="/">Main</Link>
                    <Link href="/Catalog">Catalog</Link>
                    <Link href="/About">About</Link>
                </div>
                <Logo style={{height: "60px", position: "absolute", right: "0px", left: "0px", margin:"0 auto"}}/>
                <div>
                    <Link href="/Cart">Cart</Link>
                    <Link style={{padding: 0}} href="/Profile">Profile</Link>
                </div>
            </Container>
        </Header>
    )
}

export default HeaderDesktop