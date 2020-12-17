import React, { 
    useState, 
    useRef 
} from 'react';
import {
    useHistory,
} from 'react-router-dom';
import {
    useDispatch,
} from 'react-redux';
import {
    SignupUser
} from '../../../store/reducer/signup';
import './SignUp.scss';

const confirmEmailForm = (email) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;    
    return emailRegex.test(email);
}

const confirmPasswordForm = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

const SignUp = () => {
    const dispatch = useDispatch();
    const onSignUpUser = (creds) => dispatch(SignupUser(creds));

    const history = useHistory();

    const [emailBlur, setEmailBlured] = useState(null);
    const [passwordBlur, setPasswordBlured] = useState(null);
    const [nickNameBlur, setnickNameBlured] = useState(null);

    const emailRef = useRef();
    const pwRef = useRef();
    const nickNameRef = useRef();

    const checkEmailBlured = (event)=>{
        event.preventDefault();
        setEmailBlured(true);
    }

    const checkpasswordBlured = (event)=>{
        event.preventDefault();
        setPasswordBlured(true);
    }

    const checknickNameBlured = (event)=>{
        event.preventDefault();
        setnickNameBlured(true);
    }


    if(emailBlur === true){ //input Email을 벗어나면
        if(!confirmEmailForm(emailRef.current.value)){
            alert("이메일 형식에 맞지 않습니다.");
            emailRef.current.focus();
        }
    }

    if(passwordBlur=== true){ //input password을 벗어나면
        if(!confirmPasswordForm(pwRef.current.value)){
            alert("비밀번호는 최소 8자 이상이고, 영어와 숫자로 혼합한 형식이어야 합니다.");
            pwRef.current.focus();
        }
    }

    const confirmDataExist = () => {
        const emailValue = emailRef.current.value;
        const passwordValue = pwRef.current.value;
        const nickNameValue = nickNameRef.current.value;

        if (emailValue === "" || passwordValue === ""){
            alert("정보를 다 기입해주세요.");
        }
        else {
            onSignUpUser({
                email: emailValue,
                password: passwordValue,
                username: nickNameValue,
            })
            .then(data => {
                if (data.message === 'ok') {
                    history.push('/login');
                } else {
                    throw new Error(data);
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className="signUpPage">
            <div className="signUpComponent">
                <h1 className="signUpHeader">
                    SignUp
            </h1>
                <div className="signUpInput">
                    <input ref={emailRef} type="text" placeholder="이메일을 입력해주세요." size="30" 
                        onBlur={checkEmailBlured}/><br></br>
                    <input ref={nickNameRef} type="text" placeholder="닉네임을 입력해주세요." size="30" 
                        onBlur={checknickNameBlured}/><br></br>
                    <input ref={pwRef} type="password" placeholder="사용하실 비밀번호를 입력해주세요." size="30" 
                        onBlur={checkpasswordBlured}/><br></br>
                </div>
                <button onClick={confirmDataExist}>회원가입</button>
            </div>
        </div>
    )
}

export default SignUp;