import React, { useState } from 'react';
import './StudyMeetingPage.scss';
import StudyMeetingContainer from '../StudyMeetingContainer/StudyMeetingContainer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function StudyMeetingPage() {
    const [isClicked, ClickOrNot] = useState(false);
    const navBtnClicked = ()=>{
        ClickOrNot(!isClicked);
    }

    return (
        <div>
            <Header onClicked={navBtnClicked}/>
            <Nav navState={isClicked}/>
           <StudyMeetingContainer /> 
           <Footer />
        </div>
    )
}

export default StudyMeetingPage
