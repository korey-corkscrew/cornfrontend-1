import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

import {ConnectButton} from "./ConnectButton"

//bootstrap components
import {Container, Navbar, NavItem} from "react-bootstrap";


const NavContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
`

const Nav = styled(Navbar)`
    height: 130px;
    width: 100vw;
    max-width: 100vw;
    
    background-color: transparent !important;
    
`

const ImageWrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    margin-left: 1px;
    
`
const LogoText = styled.p`
    font-weight: 600;
    font-size: 25px;
    @media (max-width: 768px) {
        display: none;
      }

`

const NavBrandImageWrapper = styled.img`
    height: 100px;
    width: auto;
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    width: auto;
    height: 50px;
    padding: 2px;
    margin-right: 30px;
    border-radius: 20px;
    background-color: #1D1E20;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    
`

const NavbarLink = styled.a`
    height: auto;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: 400;
    font-size: 20px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    color: white;
    border-radius: 40px;
    text-decoration: none;

    &:hover {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        background: #393C3F;
        border-radius: 20px;
        color: white;
    }

`
const CleanLink = styled(Link)`
    text-decoration: none;
`

const NetworkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 45px;
    padding: 2px;
    margin-right: 30px;
    border-radius: 8px;
    background-color: #1D1E20;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    @media (max-width: 768px) {
        display: none;
      }
`

const NetworkImage = styled.img`
    height: 30px;
    width: auto;
`
const NetworkText = styled.div`
    font-size: 14px;
    font-weight: 600;
    align-self: center;
    margin-right: 4px
`




export const NavigationBar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                        <ImageWrapper>
                            <NavBrandImageWrapper src={`/assets/images/CornLogo.png`}></NavBrandImageWrapper>
                            <LogoText>Corn Finance</LogoText>
                        </ImageWrapper>
                        <LinkContainer>
                            <CleanLink to="/">
                                <NavbarLink href="#">Home</NavbarLink>
                            </CleanLink>
                            <CleanLink to="/vaults">
                                <NavbarLink href="#">Vaults</NavbarLink>
                            </CleanLink>
                        </LinkContainer>
                        <NetworkContainer>
                            <NetworkImage src={`/assets/images/CornLogo.png`}></NetworkImage>
                            <NetworkText>Polygon</NetworkText>
                        </NetworkContainer>
                        <ConnectButton></ConnectButton>
                </NavContainer>
                
            </Nav>

        </>
    )
}

export default NavigationBar
