import React, { useState } from 'react';
import './Nav.scss';
import googleIcon from './google-icon.png';
import { authService, firebaseInstance } from 'fbase';
import { NavLink } from "react-router-dom";
import NoticeForm from '../Nav/NoticeForm/NoticeForm';
import NoticeShow from '../Nav/NoticeShow/NoticeShow';

function Nav() {
    // const [nickname, setNickname] = useState({});\


    const user = authService.currentUser;

    // const [newAccount, setNewAccount] = React.useState(true);
    // const [error, setError] = React.useState("");
  

    // const onChange = (event) => {
    //     const { target: { name, value } } = event;
    //     if (name === "email") {
    //         setEmail(value)
    //     } else if (name == "password") {
    //         setPassword(value)
    //     }
    // };

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         let data;
    //         if (newAccount) {
    //             data = await authService.createUserWithEmailAndPassword(email, password)
    //         } else {
    //             data = await authService.signInWithEmailAndPassword(email, password)
    //         }
    //         console.log(data);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // };

    // const toggleAccount = () => setNewAccount((prev) => !prev);

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
            userPhoto = profile.photoURL
            userName = profile.displayName;
        });
    }


 
    

   

    if (user) {
        return (
            <div className="nav">
                <div className="nav-inner">
                    <NoticeForm />
                    <div className="profile">
                        <img className="profile-image" src={userPhoto} alt="프로필 기본 이미지"></img>
                        <p className="user-name">{userName}</p>
                        <div className="write-infomation">
                            <NavLink className="wirte-btn" exact to="/write">작성하기<hr></hr></NavLink>
                            <a className="infomation-btn" href="#">내 정보<hr></hr></a>
                        </div>
                    </div>
                    <hr className="inner-line"></hr>
                    <NoticeShow />
                    <hr className="inner-line"></hr>
                    <div className="notice-add-delete">
                        <p className="add-fix">추가 및 변경</p>
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
                            <button onClick={onSocialClick} name="google" className="start-google"><img src={googleIcon} alt="구글 아이콘" />Google 계정으로 시작</button>
                        </div>

                    </div>
                    <hr className="inner-line"></hr>
                   <NoticeShow />
                    <hr className="inner-line"></hr>
                </div>
            </div>
        )

    }
}

export default Nav
