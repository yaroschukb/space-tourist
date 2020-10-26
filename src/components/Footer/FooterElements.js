import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;     
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 620px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    &:first-child {
        align-items: center;
        padding-bottom: 100px;
    }
    @media screen and (max-width: 620px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;     
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;    
    }
`

export const FooterLinkTitle = styled.h1`
   font-size: 20px;
   margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
   color: #fff;
   text-decoration: none;
   margin-bottom: 0.5rem;
   font-size: 14px;

   &:hover {
       color: #01bf71;
       transition: 0.3s all ease-out;
   }
`

export const FooterLinkSocial = styled(Link)`
   color: #fff;
   text-decoration: none;
   margin-bottom: 0.5rem;
   font-size: 25px;

   &:hover {
       color: #01bf71;
       transition: 0.3s all ease-out;
   }
`

export const FooterH2 = styled.h2`
   display: flex;
   text-align: center;
   font-size: 24px;
   margin-top: 20px;
   color: #fff;

   @media screen and (max-width: 420px) {
    font-size: 16px;  
    margin-top: 24px;  
}
` 








