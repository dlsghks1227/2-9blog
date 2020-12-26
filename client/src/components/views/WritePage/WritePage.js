import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import MarkdownContainer from '../MarkdownContainer/MarkdownContainer';

function WritePage() {
    return (
        <div className="study-container">
            <p className="study-title">글 작성하기</p>
            <MarkdownContainer />
        </div>
    )
}

export default WritePage
