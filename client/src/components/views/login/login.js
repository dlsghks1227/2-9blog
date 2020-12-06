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
        <div className="login_part">
            <h1>login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={userEmail} type="text" placeholder="이메일을 입력해주세요"></input><br></br>
                <input ref={userPassword} type="password" placeholder="패스워드를 입력해주세요"></input><br></br><br></br>
                <div className="login_btn">
                    <button>login</button>
                </div>
            </form>
        </div>

    )
}

export default LoginScreen