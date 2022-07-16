import React from 'react'
import Content from '../components/Content/Content'
import Hero from '../components/Hero/Hero'

const Home = () => {
    const first: string = "Well, actually, i know you, you just another web user who thinks you're awesome ... but ..."+
    "You are goddam right ..."
    const second: string = "Red pill - REALITY, but blue pill - simulation"
    return (
        <>
            <Hero/>
            <Content content={first} background='./assets/matrix.webp' src='./assets/pngegg.png' title='Hello, Stranger' subtitle='Or maybe not...'/>
            <Content content={second} background='./assets/2H7S.gif' src='./assets/shoot.png' title='Well... choose your path - blue or red pill' subtitle='Or maybe not...'/>
        </>
    )
}

export default Home
