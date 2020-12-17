import React, {
    useState,
    useRef,
} from 'react';
import {
    useHistory,
} from 'react-router-dom';
import {
    useDispatch,
} from 'react-redux';
import {
    SignupUser,
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
    const onSignupUser = (creds) => dispatch(SignupUser(creds));

    const history = useHistory();

    const [emailFocus, setEmailFocus] = useState(null);
    const [passwordFocus, setPasswordFocus] = useState(null);

    const emailRef = useRef();
    const pwRef = useRef();


    const EmailBlured = (event) => {
        event.preventDefault();
        setEmailFocus(false);
    }

    const passwordBlured = (event) => {
        event.preventDefault();
        setPasswordFocus(false);
    }

    if (emailFocus === false) {
        if (!confirmEmailForm(emailRef.current.value)) {
            alert("이메일 형식에 맞지 않습니다.");
        }
    }

    if (passwordFocus === false) {
        if (!confirmPasswordForm(pwRef.current.value)) {
            alert("비밀번호는 최소 8자 이상이고, 영어와 숫자로 혼합한 형식이어야 합니다.");
        }
    }

    const confirmDataExist = () => {
        const emailValue = emailRef.current.value;
        const passwordValue = pwRef.current.value;

        if (emailValue === "" || passwordValue === "")
            alert("정보를 다 기입해주세요.");
        else {
            onSignupUser({
                email: emailValue,
                username: emailValue,
                password: passwordValue
            })
            .then(data => {
                if (data.message === 'ok') {
                    history.push('/login');
                }
                else
                {
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
                    <input ref={emailRef} type="text"
                        placeholder="이메일을 입력해주세요." size="30" onBlur={EmailBlured} /><br></br>
                    <input ref={pwRef} type="password" placeholder="사용하실 비밀번호를 입력해주세요." size="30"
                        onBlur={passwordBlured} /><br></br>
                </div>
                <button onClick={confirmDataExist}>회원가입</button>
            </div>
        </div>
    )
}

export default SignUp;