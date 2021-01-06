import React, { useEffect, useState, useRef } from 'react'
import styled, { css} from 'styled-components'
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';


const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const HeroWrapper = styled.div`
width: 100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
align-items: center;
justify-content: center; 


`;

const HeroSlider = styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: left; 


&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.2;
    background-color: black;

    };


}
    `;

const HeroImage = styled.img`
position: absolute;
width: 100vw;
height: 100vh;
object-fit: cover;

`;

const HeroContent = styled.div`
text-shadow: 2px 0px black;
line-height: 1.6;
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% -100px);
color: #fff;
margin-left: 50px;


h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    text-transform: uppercase;
    padding-bottom: 5px;
}

p{
    padding-bottom: 10px;

}
`;
const Arrow = styled(IoMdArrowRoundForward)``;


const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;

`



const arrowButtons = `
width: 60px;
height: 60px;
color: #fff;
border-radius: 50px;
padding: 10px;
cursor: pointer;
background: black;
margin: 10px;

&:hover {
    background: orange;

}
`
const PrevArrow = styled(IoArrowBack)`
${arrowButtons} 
`;

const NextArrow = styled(IoArrowForward)`
${arrowButtons}`;




            const Hero = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length
const timeout = useRef(null);

useEffect(
    () => {
    const nextSlide =() => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1))
    };

    timeout.current = setTimeout(nextSlide, 5000);

return function (){
    if(timeout.current) {
        clearTimeout(timeout.current);
    }
};
    },
    [current,length]
);

const nextSlide = () => {
    setCurrent (current === length - 1 ? 0 : current + 1);
    console.log(current);
};
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 :current - 1);
    console.log(current);

}


            return (
                <HeroSection>
                    <HeroWrapper>
                    {slides.map((slide, index) => {
                        return (
                            <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt}/>
                                <HeroContent>
                                    <h1> {slide.title} </h1>
                                                <p>{slide.price}</p>
                                                    <Button to ={slide.path} primary='true'>
                                                    {slide.label}
                                                            <Arrow/>
                                                            </Button>
                                                        </HeroContent>
                                                            </HeroSlider>
                                                            )}
                                                    </HeroSlide>
                        );       
                                        })}
                                        <SliderButtons>
                                            <PrevArrow onClick={prevSlide}/>
                                            <NextArrow onClick={nextSlide}/>
                                        </SliderButtons>
                                        </HeroWrapper>
                </HeroSection>
            );
            };

export default Hero;