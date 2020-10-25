import React from 'react'
import Header from '../Header/Header'
import Nav from "../Nav/Nav"
import LandingContainer from '../LandingContainer/LandingContainer'

function LandingPage() {
    const style = {
        height: "100%"
    }
    return (
        <div className="landing-page" style={style}>
            <Header />
            <Nav />
            <LandingContainer />
        </div>
    )
}

export default LandingPage



