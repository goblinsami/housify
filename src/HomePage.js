import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';
import InfoSection from './components/InfoSection'
import './index.css'
import { InfoData } from './data/InfoData';
import { BrowserRouter, Route} from 'react-router-dom'

function HomePage() {
  
  return (
    <>

    <GlobalStyle/>
   
    <Hero slides={SliderData}/>

    <InfoSection {...InfoData}/>



    </>
  );
}

export default HomePage;
