import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className="header-inner">
            <FontAwesomeIcon icon={faBars} className="bars" />
            <header id="header">
                <NavLink className="blog-link" exact to="/"><p>BLOG</p></NavLink>
            </header>
        </div>
    )
}

export default Header
