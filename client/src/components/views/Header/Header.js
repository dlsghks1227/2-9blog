import React, {
    useState,
} from 'react'
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    logoutUser
} from '../../../store/reducer/login';
import './Header.scss'
import {
    NavLink,
} from "react-router-dom";

import {
    Navbar,
    Nav,
    Button,
    FormControl,
    Modal,
} from 'react-bootstrap';

function Header(props) {
    const [isShowSearchModal, setIsShowSearchMdal] = useState(false);
    const { isAuthenticated, username } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
        username: state.login.username
    }));
    const dispatch = useDispatch();
    const onLogoutUser = () => dispatch(logoutUser());

    const onSearchClick = () => {
        onLogoutUser();
    }

    return (
        <div style={{ height: '4rem' }}>
            <Modal
                show={isShowSearchModal}
                onHide={() => setIsShowSearchMdal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" placeholder="Search" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onSearchClick()}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <Navbar style={{ height: '4rem' }} bg="light" variant="light" fixed="top">
                <NavLink className="navbar-brand ml-3" to={`/`}>Blog</NavLink>
                <Nav>
                    <Nav.Item><NavLink className="nav-link" to="/post">Post</NavLink></Nav.Item>
                    <Nav.Item><NavLink className="nav-link" to="/study">Study</NavLink></Nav.Item>
                    <Nav.Link
                        onClick={() => setIsShowSearchMdal(true)}>
                        Search
                    </Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end mr-3">
                    <Nav>
                        {
                            isAuthenticated ? (
                                <Navbar.Text>
                                    Signed in as: <NavLink to={`/mypage`}>{username}</NavLink>
                                </Navbar.Text>

                            ) : (
                                    <NavLink to="/login">
                                        <Button
                                            variant="Dark">
                                                Login
                                        </Button>
                                    </NavLink>
                                )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
