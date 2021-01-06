import React from 'react'
import { Button } from './Button';
import styled from 'styled-components'


const Section = styled.section`
width:100%;
height: 100%;
width: 100%;
   border: 1px black solid;
   display: flex;
   justify-content: center;
   padding: 0px;

padding: 4rem 0rem;`

const Container = styled.div`
padding: 3rem calc((100vw - 1300px) /2);
width: 900px;
display: flex;
flex-wrap: wrap;
text-align: center;


grid-template-columns: 1fr 1fr;
grid-template-rows: ;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}

`

const ColLeft = styled.div`
display: flex;
flex-direction: column;
text-align: right;
line-height: 1.7;
padding: 1rem 2rem;
align-items: flex-end;
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
`

const ColRight = styled.div`
padding: 1rem 2rem;
display: flex;
flex-direction: column;
text-align: center;
flex: 50%;
align-items: center;


img {
    width: 350px;  
}

@media screen and (max-width: 768px) {
padding:;

img {
    width: 300px;  
}
}

`




const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, image}) => {
    return (
        <Section>
            <Container>
                <ColLeft> 
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
<Button primary='true' to='/homes'>{buttonLabel}</Button>
                </ColLeft>
                <ColRight>
                    <img src={image} alt='home'/>
            </ColRight>
            </Container>
            </Section>
    )
}
export default InfoSection;