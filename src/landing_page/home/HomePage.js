import React from 'react';
import Pricing from './Pricing';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';

function HomePage() {
    return ( 
        <>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
     
        </>
     );
}

export default HomePage;