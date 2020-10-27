import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Nav.scss';
import profileImage from './profile-image.png';
import { useForm } from "react-hook-form";

function Nav() {
    const [nickname, setNickname] = useState({});

    fetch('/nickname')
    .then(res => res.json())
    .then(nickname => setNickname(nickname), () => {
        console.log('data read : ', nickname);
    })

    const { register, handleSubmit, errors } = useForm();
    const onSignUpSubmit = data => console.log(data);
    const onSignInSubmit = data => console.log(data);

    const login = false;
 
    const [noticeShow, setNoticeShow] = useState(false);

    const handleNoticeClose = () => setNoticeShow(false);
    const handleNoticeShow = () => setNoticeShow(true);

    const [signUpShow, setSignUpShow] = useState(false);

    const handleSignUpClose = () => setSignUpShow(false);
    const handleSignUpShow = () => setSignUpShow(true);

    const [signInShow, setSignInShow] = useState(false);

    const handleSignInClose = () => setSignInShow(false);
    const handleSignInShow = () => setSignInShow(true);

    if (login) {
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
                        <img className="profile-image" src={profileImage} alt="프로필 기본 이미지"></img>
                        <p className="user-name">{nickname.name}</p>
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
                </div>
            </div>
        )
    } else {
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
                <Modal show={signUpShow} onHide={handleSignUpClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>회원가입</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSignUpSubmit)}>
                            <label>아이디</label>
                            <input className="signup-input" name="id" ref={register({ required: true, maxLength: 10 })} />
                            <p>{errors.id && "아이디를 입력해 주세요."}</p>
                            <label>비밀번호</label>
                            <input className="signup-input" name="password" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                            <p>{errors.password && "비밀번호를 입력해 주세요."}</p>
                            <label>비밀번호 확인</label>
                            <input className="signup-input" name="passwordConfirm" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                            <p>{errors.passwordConfirm && "비밀번호 확인을 입력해 주세요."}</p>
                            <label>닉네임</label>
                            <input className="signup-input" name="nickname" ref={register({ required: true, pattern: /^[A-Za-z]+$/i, maxLength: 6 })} />
                            <p>{errors.nickname && "닉네임을 입력해 주세요."}</p>
                            <button className="signup-submit" type="submit">회원가입</button>
                        </form>
                    </Modal.Body>
                </Modal>
                <Modal show={signInShow} onHide={handleSignInClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>로그인</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSignInSubmit)}>
                            <label>아이디</label>
                            <input name="id" className="signin-input" ref={register({ required: true, maxLength: 10 })} />
                            <p>{errors.id && "아이디를 입력해 주세요."}</p>
                            <label>비밀번호</label>
                            <input name="password" className="signin-input" ref={register({ required: true})} />
                            <p>{errors.password && "비밀번호를 입력해 주세요."}</p>
                            <button className="signin-submit" onClick={handleSignInClose} type="submit">로그인</button>
                        </form>
                    </Modal.Body>
                </Modal>
                <div className="nav-inner">
                    <div className="profile">
                        <p className="signup" onClick={handleSignUpShow}>회원가입<hr></hr><span>하러가기</span></p>
                        <p className="signin" onClick={handleSignInShow}>로그인<hr></hr><span>하러가기</span></p>
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
                </div>
            </div>
        )
    }

}

export default Nav
