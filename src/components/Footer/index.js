import React from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
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
                        <FooterLinkItems>
                                <FooterLinkSocial to='#'><FaFacebookSquare /></FooterLinkSocial>
                                <FooterLinkSocial to='#'><FaInstagramSquare /></FooterLinkSocial>
                                <FooterLinkSocial to='#'><FaTwitterSquare /></FooterLinkSocial>     
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                                <FooterLink to='#'>About us</FooterLink>
                                <FooterLink to='#'>How it Works</FooterLink>
                                <FooterLink to='#'>Careers</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Partnership</FooterLinkTitle>
                                <FooterLink to='#'>How to become a partner</FooterLink>
                                <FooterLink to='#'>Innvestors</FooterLink>
                                <FooterLink to='#'>Partners</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <FooterH2>&copy; {new Date().getFullYear()} All rights reserved</FooterH2>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
