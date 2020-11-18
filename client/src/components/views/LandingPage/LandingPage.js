import React from 'react';
import Header from '../Header/Header';
import Nav from "../Nav/Nav";
import LandingContainer from '../LandingContainer/LandingContainer';
import Footer from '../Footer/Footer';

function LandingPage() {
    const style = {
        height: "100%"
    }
    return (
        <div className="landing-page" style={style}>
            <Header />
            <Nav />
            <LandingContainer />
            <Footer />
        </div>
    )
}

export default LandingPage



