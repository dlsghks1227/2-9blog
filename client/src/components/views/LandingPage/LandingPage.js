import React,{useState} from 'react';
import Header from '../Header/Header';
import Nav from "../Nav/Nav";
import LandingContainer from '../LandingContainer/LandingContainer';
import Footer from '../Footer/Footer';

function LandingPage() {

    const [isClicked, ClickOrNot] = useState(false);
    const style = {
        height: "100%"
    }
    const navBtnClicked = ()=>{
        ClickOrNot(!isClicked);
    }

    return (
        <div className="landing-page" style={style}>
            <Header onClicked={navBtnClicked}/>
            <Nav navState={isClicked}/>
            <LandingContainer />
            <Footer />
        </div>
    )
}

export default LandingPage 



