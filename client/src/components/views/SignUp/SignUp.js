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
import {
    Form,
    Button,
    Modal,
} from 'react-bootstrap';
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


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const emailHandleChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const usernameHandleChange = (event) => {
        event.preventDefault();
        setUsername(event.target.value);

    }

    const passwordHandleChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }


    const confirmDataExist = () => {
        if (email === "" || password === "") {
            alert("정보를 다 기입해주세요.");
        }
        else {
            onSignUpUser({
                email: email,
                password: username,
                username: password,
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
        <div className="signup-dialog">
            <Modal.Dialog style={{ width: '100%' }}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="signup-container">
                        <Form.Group className="signup-group">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={emailHandleChange}
                                type="email"
                                placeholder="Enter email"
                                isValid={confirmEmailForm(email)}
                                isInvalid={!confirmEmailForm(email)} />
                            <Form.Control.Feedback type="invalid" tooltip>Fail</Form.Control.Feedback>
                            <Form.Control.Feedback tooltip>Good</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="signup-group">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                value={username}
                                onChange={usernameHandleChange}
                                type="text"
                                placeholder="Enter username"
                                isValid={username}
                                isInvalid={!username} />
                            <Form.Control.Feedback type="invalid" tooltip>Fail</Form.Control.Feedback>
                            <Form.Control.Feedback tooltip>Good</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="signup-group">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={passwordHandleChange}
                                type="password"
                                placeholder="Password"

                                isValid={confirmPasswordForm(password)}
                                isInvalid={!confirmPasswordForm(password)} />
                            <Form.Control.Feedback type="invalid" tooltip>Fail</Form.Control.Feedback>
                            <Form.Control.Feedback tooltip>Good</Form.Control.Feedback>
                        </Form.Group>
                        <Button onClick={confirmDataExist} variant="outline-secondary" className="signup-button">Sign Up</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
        // <div className="signUpPage">
        //     <div className="signUpComponent">
        //         <h1 className="signUpHeader">
        //             SignUp
        //     </h1>
        //         <div className="signUpInput">
        //             <input ref={emailRef} type="text" placeholder="이메일을 입력해주세요." size="30" 
        //                 onBlur={checkEmailBlured}/><br></br>
        //             <input ref={nickNameRef} type="text" placeholder="닉네임을 입력해주세요." size="30" 
        //                 onBlur={checknickNameBlured}/><br></br>
        //             <input ref={pwRef} type="password" placeholder="사용하실 비밀번호를 입력해주세요." size="30" 
        //                 onBlur={checkpasswordBlured}/><br></br>
        //         </div>
        //         <button onClick={confirmDataExist}>회원가입</button>
        //     </div>
        // </div>
    )
}

export default SignUp;