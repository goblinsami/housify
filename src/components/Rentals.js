import React from 'react'
import { Button } from './Button';
import styled from 'styled-components'
import ImageOne from '../images/rent.jpg'

const Section = styled.section`
width:100%;
height: 100%;
background: sienna;
display: flex;
   justify-content: center;

;


padding: 4rem 0rem;`

const Container = styled.div`
display: flex;
padding: 3rem calc((100vw - 1300px) /2);
flex-wrap: wrap;
text-align: center;
width: 1000px;

`

const ColLeft = styled.div`
display: flex;
flex: 50%;
flex-direction: column;
text-align: right;
line-height: 1.7;
padding: 1rem 2rem;
align-items: flex-end;
justify-content: ;

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem)
}
p{
    margin-bottom: 2rem;
}

@media screen and (max-width: 929px) {
text-align: center;
align-items: center;

}
`

const ColRight = styled.div`
padding: 1rem 2rem;
display: flex;
flex-direction: column;
text-align: center;
flex: 50%;
align-items: center;

img {
    width: 400px;  
}

@media screen and (max-width: 768px) {
padding:;

img {
    width: 300px;  
}
}

`




const Rentals = () => {
    return (
        <Section>
            <Container>
        
                <ColLeft> 
                    <h1>Rentals</h1>
               <p>  Our homes are built for comfort. Our best team works every day to offer the best houses arround the world, and also oustide our Earth',
                    </p>
<Button primary='true' to='/homes'>Rent Now</Button>
                </ColLeft>
                <ColRight>
            <img src={ImageOne} />
            </ColRight>
           
              
            </Container>
            </Section>
    )
}
export default Rentals;