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
import {
    Form,
    Button,
    Modal,
} from 'react-bootstrap';
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

    const onLoginClick = async (event) => {
        event.preventDefault();
        const test = await onLoginUser({
            email: userEmail.current.value,
            password: userPassword.current.value,
        });
    }

    const onSignUpClick = (event) => {
        event.preventDefault();
        history.push('/signUp');
    }

    const { from } = location.state || { from: { pathname: '/' } };
    if (isAuthenticated) return <Redirect to={from} />

    return (
        <div className="login-dialog">
            <Modal.Dialog style={{ width: '100%' }}>
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="login-container">
                        <Form.Group className="my-4">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={userEmail} type="email" placeholder="Enter email"></Form.Control>
                        </Form.Group>

                        <Form.Group className="my-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={userPassword} type="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                        <Button onClick={onLoginClick} variant="outline-secondary" className="login-button">Login</Button>
                        <Button onClick={onSignUpClick} variant="outline-secondary" className="login-button">Sign Up</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default LoginScreen