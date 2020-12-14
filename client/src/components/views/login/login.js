import React, { Fragment } from 'react';
import './login.scss';

function loginScreen() {

    const login_Clicked = () => {

    }

    return (
        <div className="LoginPage">
            <div className="LoginPart">
                <h1 className="LoginTitle">Welcome</h1>
                <div className="LoginInput">
                    <input type="text" size="30" placeholder="아이디를 입력해주세요"></input><br></br>
                    <input type="password" size="30" placeholder="패스워드를 입력해주세요"></input><br></br><br></br>
                </div>
                <div className="LoginButton">
                    <button onClick={login_Clicked}>로그인</button><br></br>
                    <button onClick={login_Clicked}>회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default loginScreen