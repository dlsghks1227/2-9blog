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
    useHistory,
} from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Navbar,
    Nav,
    Button,
    Form,
    FormControl,
    Modal,
    Row
} from 'react-bootstrap';

function Header(props) {
    const [isShowSearchModal, setIsShowSearchMdal] = useState(false);
    const { isAuthenticated, username } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
        username: state.login.username
    }));
    const dispatch = useDispatch();
    const onLogoutUser = () => dispatch(logoutUser());
    const history = useHistory();

    const onSearchClick = () => {
    }

    return (
        <div>
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
            <Navbar style={{ height: '5rem'}} bg="light" variant="light" fixed="top">
                <Navbar.Brand className="ml-3" href="/">Blog</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/post">Post</Nav.Link>
                    <Nav.Link href="/study">Study</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end mr-3">
                    <Nav>
                        <Button
                            variant="Dark"
                            onClick={() => setIsShowSearchMdal(true)}>
                            Search
                        </Button>
                        {
                            isAuthenticated ? (
                                <Navbar.Text>
                                    Signed in as: <a href={`/users/${username}`}>{username}</a>
                                </Navbar.Text>

                            ) : (
                                    <Button
                                        variant="Dark"
                                        href="/login">login</Button>
                                )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
