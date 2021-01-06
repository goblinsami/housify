import React from 'react'
import { Button } from './Button';
import styled from 'styled-components'

const Section = styled.section`
width:100%;
height: 100%;
padding: 4rem 0rem;`


const MainContainer = styled.div`
padding: 3rem calc((100vw - 1300px) /2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`


const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
text-align: right;
line-height: 1.4;
padding: 1rem 2rem;

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem)
}
p{
    margin-bottom: 2rem;
}
@media screen and (max-width: 768px) {
    padding: 1rem 2rem;
    justify-content: end;

    

}

`

const ColumnRight = styled.div`
padding: 1rem 2rem;
display: flex;
justify-content: center;
align-items: flex-start;

img {
    width: 80%;
}

@media screen and (max-width: 768px) {
padding: 0;
margin: 0;
justify-content: top;
align-items: center;

}
`




const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
<p><Button primary='true' to='/homes'>{buttonLabel}</Button></p>
                </ColumnLeft>
                <ColumnRight>
                    <img src={image} alt='home'/>
            </ColumnRight>
            </Container>
        </Section>
    )
}
export default InfoSection;