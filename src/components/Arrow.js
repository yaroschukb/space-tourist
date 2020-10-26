import React, { useEffect, useState } from 'react'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import styled from 'styled-components'
import {animateScroll as scroll} from 'react-scroll';

const Arrow = () => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        window.pageYOffset >=400 ? setScrollNav(true) : setScrollNav(false)
    }
   

    useEffect (()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <ArrowWrapper scrollNav={scrollNav}>
          <FaArrowAltCircleUp onClick={toggleHome}/>  
        </ArrowWrapper>
    )
}

const ArrowWrapper = styled.div`
        display: ${({scrollNav}) => (scrollNav ? 'flex' : 'none')};
        justify-content: flex-start;
        position: fixed; 
        bottom: 40px;
        font-size: 70px;
        color: #708090;
        left: 93%;
        height: 50px;
        z-index: 1000;
        opacity:0.5;

        &:hover {
            opacity:1;
        }

        @media screen and (max-width: 820px) {
            left: 90%;
        }
        @media screen and (max-width: 1024px) {
            left: 90%;
        }
        @media screen and (max-width: 420px) {
            left: 75%;
        }
` 

export default Arrow

