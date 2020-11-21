import React, { Fragment } from 'react';
import './login.scss';

function loginScreen() {

    const login_Clicked = () => {
    }

    return (
        <div className="login_part">
            <h1>login</h1>
            <input type="text" placeholder="아이디를 입력해주세요"></input><br></br>
            <input type="password" placeholder="패스워드를 입력해주세요"></input><br></br><br></br>
            <div className="login_btn">
                <button onClick={login_Clicked}>
                    login</button>
            </div>
        </div>

    )
}

export default loginScreen