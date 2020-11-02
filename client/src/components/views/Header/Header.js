import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <NavLink className="blog-link" exact to="/"><p>blog</p></NavLink>
            <hr></hr>
        </header>
    )
}

export default Header
