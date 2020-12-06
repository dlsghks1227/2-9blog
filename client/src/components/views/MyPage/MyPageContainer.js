import React, { useState, useEffect, useRef } from 'react';
import './MyPageContainer.scss';
import profile from './profile.png';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyPageContainer({ myinfo, onChangeName, onChangeIntroduce }) {
    const [imageEdit, setImageEdit] = useState('');
    const [previewURL, setPreviewURL] = useState('');

    const onImageChangeHandler = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImageEdit(file);
            setPreviewURL(reader.result)
        }
        reader.readAsDataURL(file);
    }

    let profilePreview = null;
    if (imageEdit !== '') {
        profilePreview = <img className="profile-preview" src={previewURL} />
    } else {
        profilePreview = <img src={profile} />

    }


    const [imageBtn, setImageBtn] = useState(false);
    const [nameBtn, setNameBtn] = useState(false);
    const [introduceBtn, setIntroduceBtn] = useState(false);

    const onImageClickHandler = () => {
        setImageBtn(!imageBtn);
    }

    const onNameClickHandler = () => {
        setNameBtn(!nameBtn);
    }

    const onIntroduceClickHandler = () => {
        setIntroduceBtn(!introduceBtn);
    }

    const [nameInput, setNameInput] = useState("");
    const [introInput, setIntroInput] = useState("");

    const nameChange = (e) => {
        setNameInput(e.target.value);
    }

    const introduceChange = (e) => {
        setIntroInput(e.target.value);
    }

    const nameSubmit = (e) => {
        e.preventDefault();
        if (nameInput === "") {
            alert("이름을 입력하세요")
        } else {
            onChangeName(nameInput);
            setNameBtn(false);
        }
    }

    const introSubmit = (e) => {
        e.preventDefault();
        onChangeIntroduce(introInput);
        setIntroduceBtn(false);
    }


    const imgRef = useRef();
    const nameRef = useRef();
    const introduceRef = useRef();

    useEffect(() => {
        imageBtn === true ? imgRef.current.style.display = "block"
            : imgRef.current.style.display = "none";
        nameBtn === true ? nameRef.current.style.display = "block"
            : nameRef.current.style.display = "none";
        introduceBtn === true ? introduceRef.current.style.display = "block"
            : introduceRef.current.style.display = "none";
    }, [imageBtn, nameBtn, introduceBtn])

    return (
        <section className="mypage-section">
            <article className="my-information">
                <p className="mypage-title">내 정보</p>
                <div className="profileimg-inner">
                    <button className="edit-information image-edit" onClick={onImageClickHandler}><FontAwesomeIcon className="edit-icon" icon={faEdit} /></button>
                    <input type="file" ref={imgRef} onChange={onImageChangeHandler} className="edit-input image-input" />
                    {profilePreview}
                </div>
                <div className="infomation-inner">
                    <p>{myinfo.name}
                    <button className="edit-information" onClick={onNameClickHandler}><FontAwesomeIcon className="edit-icon" icon={faEdit} /></button>
                    </p>
                    <form onSubmit={nameSubmit} ref={nameRef}>
                        <input type="text" value={nameInput}  onChange={nameChange} className="edit-input name-input" />
                        <div><button type="submit">바꾸기</button></div>
                    </form>
                    <p>abc123@defg.com</p>
                    <p>{myinfo.intro}
                        <button className="edit-information" onClick={onIntroduceClickHandler}><FontAwesomeIcon className="edit-icon" icon={faEdit} /></button>
                    </p>
                    <form onSubmit={introSubmit} ref={introduceRef}>
                        <input type="textarea" value={introInput} onChange={introduceChange}  className="edit-input introduce-input" />
                        <div><button type="submit">바꾸기</button></div>
                    </form>
                </div>
            </article>
            <article className="my-write">
                <p className="mypage-title write-title">작성한 글</p>
                <div>
                    <p>React의 역사</p>
                    <p>React의 사용법</p>
                    <p>React의 시작</p>
                </div>
            </article>
        </section>
    )
}

export default MyPageContainer

