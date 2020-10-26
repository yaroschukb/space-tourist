import React from 'react'
import { Button } from '../ButtonElement'
import { 
    InfoContainer,
    Infowrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2, 
    ImgWrap,
    Img,
    BtnWrap } from './InfoElements'

const InfoSection = (props) => {
    const {
    id,
    lightBg,
    lightText,
    topLine,
    headline,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    dark2,
    primary,
    darkText,
    description1,
    name
} = props

    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} name={name}>
                <Infowrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description1}</Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}                                    
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </Infowrapper>

            </InfoContainer>
        </>
    )
}

export default InfoSection
