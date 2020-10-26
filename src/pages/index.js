import React, { useState } from 'react'
import Sidebar from './../components/Sidebar';
import Navbar from './../components/Navbar/index';
import HeroSection from '../components/HeroSection';
import InfoSection from './../components/InfoSection/index';
import Rocket from './../components/RocketSection/index';
import { homeObjOne, homeObjTwo, homeObjTree } from './../components/InfoSection/Data';
import Footer from './../components/Footer/index';
import Arrow from '../components/Arrow';

const Home = () => {
    
    const [isOpen, setIsOpen] = useState (false)
    // function for open/close Sidebar 
    const toggle = () => { setIsOpen(!isOpen) }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/> 
           <HeroSection />
           <InfoSection {...homeObjOne}/>
           <InfoSection {...homeObjTwo}/>
           <Rocket />
           <InfoSection {...homeObjTree}/>
           <Footer />
           {/* Arrow component to scrollTop */}
           <Arrow /> 
        </>
    )
}

export default Home
