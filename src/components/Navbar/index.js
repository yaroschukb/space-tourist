import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa'
import {GoRocket} from 'react-icons/go'
import {animateScroll as scroll} from 'react-scroll';
import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavbarElements';


const Navbar = ({toggle}) => { 

    const [scrollNav, setScrollNav] = useState(false)
    //change background navbar
    const changeNav = () => {
        window.scrollY >=200 ? setScrollNav(true) : setScrollNav(false)
    }
    
    useEffect (()=>{
        window.addEventListener('scroll', changeNav)
    }, [])
    //scroll to top
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to="/" onClick={toggleHome}>Space <GoRocket /> Tour</NavLogo>
                    <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='outside window'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                                >Outside window</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='under your fit'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                                >Under your fit</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='rocket'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Rocket</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='discover'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Discover</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Sign In</NavBtnLink>
                        </NavBtn>
                </NavContainer>
            </Nav>
        </>     
    );
}
export default Navbar;