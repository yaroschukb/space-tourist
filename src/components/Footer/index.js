import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterH2,
    FooterLinkSocial
} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <IconContext.Provider value={{color: '#fff'}}>
                        <FooterLinkItems>
                                <FooterLinkSocial to='#'><FaFacebookSquare /></FooterLinkSocial>
                                <FooterLinkSocial to='#'><FaInstagramSquare /></FooterLinkSocial>
                                <FooterLinkSocial to='#'><FaTwitterSquare /></FooterLinkSocial>     
                        </FooterLinkItems>
                        </IconContext.Provider>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                                <FooterLink to='/signin'>About us</FooterLink>
                                <FooterLink to='/signin'>How it Works</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Partnership</FooterLinkTitle>
                                <FooterLink to='/signin'>How to become a partner</FooterLink>
                                <FooterLink to='/signin'>Innvestors</FooterLink>
                                <FooterLink to='/signin'>Partners</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <FooterH2>&copy; {new Date().getFullYear()} All rights reserved</FooterH2>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
