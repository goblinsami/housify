import React from 'react'
import styled from 'styled-components'
import { Button, Button2 } from './Button';

const FooterContainer = styled.footer `
height: 300px;
background-color: black;
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
padding-bottom: 10px;
color: white;

h2 {
    font-size: 25px;
    margin-bottom: 1rem;
    margin-top: 2rem;

}

p{
    margin-bottom: 2rem;

}

@media screen and (max-width: 768px) {
    h2 {
    font-size: 22px;
    

}
`
const TextContainer = styled.div`
justify-content: center;
`


function Footer() {
    return (

<FooterContainer>
<h2>Buy the home of your dreams</h2>
<p>What are you waiting?</p>
<p><Button2>Buy Now</Button2></p>
</FooterContainer>
    )
}


export default Footer;