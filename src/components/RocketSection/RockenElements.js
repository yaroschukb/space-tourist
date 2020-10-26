import styled from 'styled-components'

export const RocketContainer = styled.div`
    height:860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1200px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const RocketWrapper = styled.div`
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const RocketCard = styled.div`
    height:800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    align-items: center;
    background: #fff;
    max-height: 350px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`

export const RocketIcon = styled.img`
    height: 140px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 30px;
`

export const RocketH1 = styled.h1`
    font-size: 2.5rem;
    color:#fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const RocketH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
`
export const RocketP = styled.p`
    font-size: 1rem;
    text-align: center;
`





