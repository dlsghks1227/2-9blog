import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Nav.scss';
import profileImage from './profile-image.png';
import googleIcon from './google-icon.png';
import { authService, firebaseInstance } from 'fbase';

function Nav() {
    // const [nickname, setNickname] = useState({});\

    const user = authService.currentUser;

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [newAccount, setNewAccount] = React.useState(true);
    const [error, setError] = React.useState("");

    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name == "password") {
            setPassword(value)
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password)
            } else {
                data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }

    // fetch('/nickname')
    // .then(res => res.json())
    // .then(nickname => setNickname(nickname), () => {
    //     console.log('data read : ', nickname);
    // })

    let [userName, setUserName] = useState("");
    let [userPhoto, setUserPhoto] = useState({});

    if (user != null) {
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          userPhoto = profile.photoURL
          userName = profile.displayName;
        });
      }

    const [noticeShow, setNoticeShow] = useState(false);

    const handleNoticeClose = () => setNoticeShow(false);
    const handleNoticeShow = () => setNoticeShow(true);


    if (user) {
        return (
            <div className="nav">
                <Modal show={noticeShow} onHide={handleNoticeClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>게시판 추가 및 변경</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    </Modal.Body>

                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
                <div className="nav-inner">
                    <div className="profile">
                        <img className="profile-image" src={userPhoto} alt="프로필 기본 이미지"></img>
                        <p className="user-name">{userName}</p>
                        <div className="write-infomation">
                            <a className="wirte-btn" href="#">작성하기<hr></hr></a>
                            <a className="infomation-btn" href="#">내 정보<hr></hr></a>
                        </div>
                    </div>
                    <hr className="inner-line"></hr>
                    <ul className="notice-list">
                        <li>React
                        <ul>
                                <li>
                                    react
                            </li>
                                <li>
                                    redux
                            </li>
                                <li>
                                    router
                            </li>
                            </ul>
                        </li>
                        <li>Node.js
                        <ul>
                                <li>
                                    express
                            </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="inner-line"></hr>
                    <div className="notice-add-delete">
                        <p className="add-fix" onClick={handleNoticeShow}>추가 및 변경</p>
                        <hr></hr>
                    </div>
                    <div className="logout">
                        <p onClick={() => authService.signOut()}>로그아웃</p>
                        <hr></hr>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="nav">
                <div className="nav-inner">
                    <div className="profile">
                        <div>
                            <button onClick={onSocialClick} name="google" className="start-google"><img src={googleIcon} alt="구글 아이콘"/>Google 계정으로 시작</button>
                        </div>

                    </div>
                    <hr className="inner-line"></hr>
                    <ul className="notice-list">
                        <li>React
                        <ul>
                                <li>
                                    react
                            </li>
                                <li>
                                    redux
                            </li>
                                <li>
                                    router
                            </li>
                            </ul>
                        </li>
                        <li>Node.js
                        <ul>
                                <li>
                                    express
                            </li>
                            </ul>
                        </li>
                    </ul>
                    <hr className="inner-line"></hr>
                </div>
            </div>
        )
    }

}

export default Nav
