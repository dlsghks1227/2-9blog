import React, { Fragment,useState } from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return <header>
        <Link to="/aim">
        <span>목표 설정</span>
        </Link>
    </header>
}


export default Header;