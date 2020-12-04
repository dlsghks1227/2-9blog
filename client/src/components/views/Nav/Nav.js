import React, { useState, useRef, useEffect } from 'react';
import './Nav.scss';
import googleIcon from './google-icon.png';
// import { authService } from 'fbase';
import { NavLink } from "react-router-dom";
// import { response } from 'express';

function Nav(props) {
    // const [nickname, setNickname] = useState({});\

    // const user = authService.currentUser;

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
        fetch("users/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: "admin@email.com",
                password: "admin"
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        }
        )
        // const { target: { name } } = event;
        // let provider;
        // if (name === "google") {
        //     provider = new firebaseInstance.auth.GoogleAuthProvider();
        // }
        // const data = await authService.signInWithPopup(provider);
        // console.log(data);
    }

    // fetch('/nickname')
    // .then(res => res.json())
    // .then(nickname => setNickname(nickname), () => {
    //     console.log('data read : ', nickname);
    // })

    let [userName, setUserName] = useState("");
    let [userPhoto, setUserPhoto] = useState({});

    // if (user != null) {
    //     user.providerData.forEach(function (profile) {
    //         userPhoto = profile.photoURL
    //         userName = profile.displayName;
    //     });
    // }



    // if (user) {
    //     return (
    //         <div className="nav">
    //             <div className="nav-inner">
    //                 <div className="profile">
    //                     <img className="profile-image" src={userPhoto} alt="프로필 기본 이미지"></img>
    //                     <p className="user-name">{userName}</p>
    //                     <div className="write-infomation">
    //                         <NavLink className="wirte-btn" exact to="/write">작성하기<hr></hr></NavLink>
    //                         <a className="infomation-btn" href="#">내 정보<hr></hr></a>
    //                     </div>
    //                 </div>
    //                 <div className="notice-add-delete">
    //                     <p className="add-fix">추가 및 변경</p>
    //                 </div>
    //                 <div className="logout">
    //                     <p onClick={() => authService.signOut()}>로그아웃</p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // } else {

    const navRef = useRef();

    useEffect(()=>{
        props.navState == true ? navRef.current.style.display ="inline"
              : navRef.current.style.display ="none"
    },[props.navState])

    //console.log(navRef)
    return (
        <div className="nav">
            <div className="nav-inner" ref={navRef}>
                <div className="profile">
                    <div>
                        <button onClick={onSocialClick} name="google" className="start-google"><img src={googleIcon} alt="구글 아이콘" />Google 계정으로 시작</button>
                    </div>
                    <NavLink exact to="/mypage">마이페이지</NavLink>
                    <NavLink exact to="/study">스터디 모집</NavLink>

                </div>
            </div>
        </div>
    )

    //}
}

export default Nav
