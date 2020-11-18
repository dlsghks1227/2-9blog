import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
    return (
        <div className="header-inner">
            <FontAwesomeIcon icon={faBars} className="bars" onClick={props.onClicked} />
            <header id="header">
                <NavLink className="blog-link" exact to="/"><p>BLOG</p></NavLink>
            </header>
        </div>
    )
}

export default Header
