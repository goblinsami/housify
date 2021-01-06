import React from 'react'
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

const DropDownContainer = styled.div`
position: fixed;
z-index: 101;
width: 100%;
height 100%;
background: orange;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity:  ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '1' : '-100%')}; 
`;


const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;`


const CloseIcon = styled(FaTimes)`
color: white`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 1rem;
`;


const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff`;
const BtnWrap= styled.div`
display: flex;
justify-content: center`;



const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item, index) => (
                    <DropdownLink to={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
                ))}
            </DropdownMenu>
            <BtnWrap>
                <Button primary='false' to="/contact">Contact us</Button>
            </BtnWrap>
        </DropdownWrapper>
        </DropDownContainer>
    );
};

export default Dropdown;