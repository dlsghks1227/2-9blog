import React, { useState, useEffect, useRef } from 'react';
import './MyPageContainer.scss';
import profile from './profile.png';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyPageContainer() {
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
    if(imageEdit !== ''){
        profilePreview = <img className="profile-preview" src={previewURL} />
    } else{
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

    const [name, setName] = useState("");
    const [introduce, setIntroduce] = useState("");

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const introduceChange = (e) => {
        setIntroduce(e.target.value);
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
                    <input type="file" ref={imgRef} className="edit-input image-input" onChange={onImageChangeHandler} />
                    {profilePreview}
                </div>
                <div className="infomation-inner">
                    <p>{name}
                    <button className="edit-information" onClick={onNameClickHandler}><FontAwesomeIcon className="edit-icon" icon={faEdit} /></button>
                    <input type="text" ref={nameRef} onChange={nameChange} className="edit-input name-input"/>
                    </p>
                    <p>abc123@defg.com</p>
                    <p>{introduce}
                    <button className="edit-information" onClick={onIntroduceClickHandler}><FontAwesomeIcon className="edit-icon" icon={faEdit} /></button>
                    <input type="textarea" onChange={introduceChange} ref={introduceRef} className="edit-input introduce-input" />
                    </p>
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

