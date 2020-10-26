import React, { useState } from 'react'
import Video from '../../video/Space.mp4'
import { 
    HeroContainer,
    HeroContent,
    HeroBg,
    VideoBg,
    ArrowForward, 
    ArrowRight,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    DiscountLink
 } from './HerosectionElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)
    //change arrow on link
    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Space is closer than you think!</HeroH1>
                <HeroP>
                    Join now and get a 5,000$ discount on the first round!
                </HeroP>
                <HeroBtnWrapper>
                    <DiscountLink to="/"
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >Get discount NOW! {hover ? <ArrowForward /> : <ArrowRight />}
                    </DiscountLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
