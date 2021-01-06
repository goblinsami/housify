import React from 'react'
import { Button } from './Button';
import styled from 'styled-components'
import ImageOnew from "./WORK.jpg"
import ImageOne from '../images/house_interior2.jpg'

const Section = styled.section`
width:100%;
height: 100%;
background-color: LightSteelBlue;
display: flex;
   justify-content: center;




padding: 4rem 0rem;`



const Container = styled.div`
padding: 3rem calc((100vw - 1300px) /2);
display: flex;
flex-wrap: wrap;
text-align: center;
width: 1000px;




`

const ColLeft = styled.div`
display: flex;
flex-direction: column;
text-align: left;
line-height: 1.7;
padding: 1rem 2rem;
align-items: flex-start;
justify-content: center;
flex: 50%;

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




const Houses = () => {
    return (
        <Section>
            <Container>
            <ColRight>
            <img src={ImageOne} />
            </ColRight>
                <ColLeft> 
                    <h1>Houses</h1>
               <p>  Our homes are built for comfort. Our best team works every day to offer the best houses arround the world, and also oustide our Earth',
                    </p>
<Button primary='true' to='/homes'>FUCK YOU</Button>
                </ColLeft>

           
              
            </Container>
            </Section>
    )
}
export default Houses;