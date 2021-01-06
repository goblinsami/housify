import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';
import InfoSection from './components/InfoSection'
import './index.css'
import { InfoData } from './data/InfoData';
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Houses from './components/Houses'
import Rentals from './components/Rentals'

import HomePage from './HomePage';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <BrowserRouter>

    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle} />

    <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/houses" component={Houses}/>
    <Route path="/rentals" component={Rentals}/>

    <Route path="/about" component={About}/>

    </Switch>

    <Footer/>

    </BrowserRouter>

    </>
  );
}

export default App;
