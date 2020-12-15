import React, { useEffect, useRef } from 'react';
import {
    useLocation,
    Redirect,
    useHistory,
} from 'react-router-dom';
import './login.scss';

import {
    useAuth,
} from '../../../Auth/ProvideAuth';

function LoginScreen() {
    const auth = useAuth();
    const location = useLocation();
    
    const userEmail = useRef(null);
    const userPassword = useRef(null);

    useEffect(() => {
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        auth.login({
            email: userEmail.current.value,
            password: userPassword.current.value
        });
    }

    const { from } = location.state || { from: { pathname: '/'}};
    if (auth.isAuthenticated) return <Redirect to={from}/>

    return (
        <div className="LoginPage">
            <div className="LoginPart">
                <h1 className="LoginTitle">Welcome</h1>
                <div className="LoginInput">
                    <input type="text" size="30" placeholder="아이디를 입력해주세요"></input><br></br>
                    <input type="password" size="30" placeholder="패스워드를 입력해주세요"></input><br></br><br></br>
                </div>
                <div className="LoginButton">
                    <button onClick={handleSubmit}>로그인</button><br></br>
                    <button onClick={handleSubmit}>회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen