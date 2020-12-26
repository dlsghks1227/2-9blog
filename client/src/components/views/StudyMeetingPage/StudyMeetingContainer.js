import React from 'react'
import { NavLink, Route } from 'react-router-dom'; 
import './StudyMeetingContainer.scss'

function StudyMeetingContainer({ match }) {
    return (
        <section>
            <p className="study-title">스터디 모집</p>
            <article className="study-article">
                <NavLink exact to="/studypost"><p>React 스터디 모집</p></NavLink>
                <p>django 스터디 모집</p>
                <NavLink exact to="/study/write"><button className="study-write">글 쓰기</button></NavLink>
                <div className="search-box">
                    <input type="text" className="search-input"/>
                    <button className="search-btn">검색</button>
                </div>
            </article>
        </section>
    )
}

export default StudyMeetingContainer
