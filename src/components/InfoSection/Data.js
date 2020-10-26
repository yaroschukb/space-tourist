import mars from '../../images/marsDiscover1.png'
import marsDiscover from '../../images/Astronaut.jpeg'
import marsGround from '../../images/mars-ground.jpg'

export const homeObjOne = {
    id: 'Outside window',
    lightBg: false,
    lightText: true,
    lighTextDesc: true,
    topLine: 'Falcon 9',
    headline: 'Mars outside the window!',
    description: 'Go on tour tomorrow and get the opportunity to enjoy the fantastic views of the "red planet"',
    buttonLabel: 'I take it!',
    imgStart: false,
    img:  mars,
    alt: 'Mars',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'Under your fit',
    lightBg: true,
    lightText: false,
    lighTextDesc: false,
    active: 'true',
    topLine: 'Crew Dragon',
    headline: 'Mars under your fit!',
    description: 'Go on tour tomorrow and get the opportunity to enjoy the fantastic views of the "red planet"',
    buttonLabel: 'I take it!',
    imgStart: true,
    img:  marsGround,
    alt: 'Mars Ground!',
    dark: false,
    primary: false,
    darkText: true
}
export const homeObjTree = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lighTextDesc: true,
    topLine: 'Discover Mars',
    headline: 'Do you want to explore the planet?',
    description: 'The minimum distance from Earth to Mars is about 33.9 million miles (54.6 million kilometers).', 
    description1: 'Mars\' moons Fobos and Deimos',
    buttonLabel: 'Look at this!',
    imgStart: true,
    img:  marsDiscover,
    alt: 'Mars Discover',
    dark: true,
    primary: true,
    darkText: true
}