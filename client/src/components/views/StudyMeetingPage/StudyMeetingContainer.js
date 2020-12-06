import React from 'react'
import './StudyMeetingContainer.scss'

function StudyMeetingContainer() {
    return (
        <section>
            <p className="study-title">스터디 모집</p>
            <article className="study-article">
                <p>React 스터디 모집</p>
                <p>django 스터디 모집</p>
                <button className="study-write">글 쓰기</button>
                <div className="search-box">
                    <input type="text" className="search-input"/>
                    <button className="search-btn">검색</button>
                </div>
            </article>
        </section>
    )
}

export default StudyMeetingContainer
