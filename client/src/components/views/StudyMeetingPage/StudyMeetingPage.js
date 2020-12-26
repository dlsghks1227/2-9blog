import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './StudyMeetingPage.scss';
import StudyMeetingContainer from './StudyMeetingContainer';
import StudyWritePage from '../StudyWritePage/StudyWritePage';

function StudyMeetingPage() {
    const [isClicked, ClickOrNot] = useState(false);
    const navBtnClicked = ()=>{
        ClickOrNot(!isClicked);
    }

    return (
        <div className="study-container">
           <StudyMeetingContainer /> 
        </div>
    )
}

export default StudyMeetingPage
