import React from 'react'
import Content from '../components/Content/Content'
import Hero from '../components/Hero/Hero'

const Home = () => {
    const first: string = "Well, actually, i know you, you just another web user who thinks you're awesome ... but ..."+
    "You are goddam right ..."
    return (
        <>
            <Hero/>
            <Content content={first} src='./assets/pngegg.png' title='Hello, Stranger' subtitle='Or maybe not...'/>
        </>
    )
}

export default Home
