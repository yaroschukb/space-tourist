import React from 'react'
import {
    RocketContainer,
    RocketH1,
    RocketCard,                  
    RocketIcon,
    RocketH2,
    RocketP,
    RocketWrapper
} from './RockenElements'
import spaceShip from '../../images/spaceship.jpg'
import dragon from '../../images/Dragon.jpg'
import newShepard from '../../images/Blue-Origin.jpg'


const Rocket = () => {
    return (
        <>
            <RocketContainer id="rocket">
                <RocketH1>Choose your Rocket!</RocketH1>
                <RocketWrapper>
                    <RocketCard>
                        <RocketIcon src={spaceShip}/>
                        <RocketH2>Spaceship</RocketH2>
                        <RocketP><b>Speed:</b> 25,000 miles per hour</RocketP>
                        <RocketP>Сomfortable conditions, excellent view from the illuminator!</RocketP>
                        <RocketP>Quick round trip!</RocketP>
                    </RocketCard>
                    <RocketCard>
                        <RocketIcon src={dragon}/>
                        <RocketH2>Dragon</RocketH2>
                        <RocketP><b>Speed:</b> 22,000 miles per hour</RocketP>
                        <RocketP>Сomfortable conditions, excellent view from the illuminator!</RocketP>
                        <RocketP>Lots of fun while traveling!</RocketP>
                    </RocketCard>
                    <RocketCard>
                        <RocketIcon src={newShepard}/>
                        <RocketH2>New Shepard</RocketH2>
                        <RocketP><b>Speed:</b> 23,000 miles per hour</RocketP>
                        <RocketP>Сomfortable conditions, excellent view from the illuminator!</RocketP>
                        <RocketP>Thoughtful journey!</RocketP>
                    </RocketCard>
                </RocketWrapper>

            </RocketContainer>
            
        </>
    )
}

export default Rocket
