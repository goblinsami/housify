import React from 'react'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
height: 50px;
justify-content: space-between;
padding: 1rem 2 rem;
z-index:100;
position: fixed;
display: flex;
width: 100%;
margin-top: 10px;
`
const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;

`;

const Logo = styled(Link)`
${NavLink}
font-style: italic;

`;

const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){
    display: block;
    background-size: contain;
    height: 25px;
    width: 25px;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    transorm: translate(-10% , 25%);
}
`;



const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px; 

@media screen and (max-width: 768px) {
    display: none; 
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}


@media screen and (max-width: 768px) {
    display: none;
}
`;
const NavBtn = styled.div`
display: flex:
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
`;

const Navbar = ({toggle}) => {

    return (
        <Nav>
        <Logo to="/">HOUSIFY</Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
{menuData.map((item, index) => (
    <NavMenuLinks to= {item.link} key={index}>
    {item.title}
    </NavMenuLinks>
))}
        </NavMenu>
        <NavBtn>
            <Button primary='true' to ="/contact">   Contact us</Button>

        </NavBtn>
        </Nav>
    );
};

export default Navbar;
