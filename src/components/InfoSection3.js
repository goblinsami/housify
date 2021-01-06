import React from 'react'
import { Button } from './Button';
import styled from 'styled-components'

const Section = styled.section`
width: 100%;
height: 100%;
margin-left: 9%;
margin-top:9%;

`;

const Container = styled.div`
width: 100%;
display: grid;
grid-template-areas: 'ColumnLeft ColumnRight';
grid-template-columns: 1fr 1fr;

@media screen and (max-width: 768px) {
    grid-template-areas: 'ColumnLeft'
                            ' ColumnRight';

}

`



const ColumnLeft = styled.div`
justify-content: center;
line-height: 1.4;
padding-top: 10rem;
grid-area: ColumnLeft;

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem)
}
p{
    margin-bottom: 2rem;
}
`

const ColumnRight = styled.div`
padding: 1rem 2rem;
grid-area: ColumnRight;


img {
    height: 65%
}
`




const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
<Button primary='true' to='/homes'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home'/>
            </ColumnRight>
            </Container>
        </Section>
    )
}
export default InfoSection;