import React, { useEffect, useRef } from 'react';
import {
    useLocation,
    Redirect,
    useHistory,
} from 'react-router-dom';
import { 
    useSelector,
    useDispatch,
 } from 'react-redux';
 import {
    loginUser,
} from '../../../store/reducer/login';
import './login.scss';

function LoginScreen() {
    const { isAuthenticated } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
    }));
    const dispatch = useDispatch();
    const onLoginUser = (creds) => dispatch(loginUser(creds));

    const location = useLocation();
    const history = useHistory();
    
    const userEmail = useRef(null);
    const userPassword = useRef(null);

    useEffect(() => {
    }, []);

    const onLoginClick = (event) => {
        event.preventDefault();
        const test = onLoginUser({
            email: userEmail.current.value,
            password: userPassword.current.value,
        })
    }

    const onSignUpClick = (event) => {
        event.preventDefault();
        history.push('/signUp');
    }

    const { from } = location.state || { from: { pathname: '/'}};
    if (isAuthenticated) return <Redirect to={from}/>

    return (
        <div className="LoginPage">
            <div className="LoginPart">
                <h1 className="LoginTitle">Welcome</h1>
                <div className="LoginInput">
                    <input ref={userEmail} type="text" size="30" placeholder="아이디를 입력해주세요"></input><br></br>
                    <input ref={userPassword} type="password" size="30" placeholder="패스워드를 입력해주세요"></input><br></br><br></br>
                </div>
                <div className="LoginButton">
                    <button onClick={onLoginClick}>로그인</button><br></br>
                    <button onClick={onSignUpClick}>회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen