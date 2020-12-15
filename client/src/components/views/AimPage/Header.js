import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.scss'

function Header() {

    return (
        <header className="HeaderStyle">
            <div className="HeaderWrapper">
                <span>목표 세우기 페이지</span>
            </div>
    </header>
    )
}


export default Header;