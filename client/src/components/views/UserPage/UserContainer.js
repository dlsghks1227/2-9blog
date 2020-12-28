import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    getUserProfile,
} from '../../../store/reducer/api';
import '../MyPage/MyPageContainer.scss';

function UserContainer({ username }) {
    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [loading, setLoding] = useState(false);

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const onGetUserProfile = (name) => dispatch(getUserProfile(name));
        const fetchProfile = async () => {
            try {
                setError(null);
                setLoding(true);

                setProfile(null);

                const data = await onGetUserProfile(username);
                if (data && data.message === "ok" && data.data) {
                    setProfile(data.data);
                } else {
                    throw new Error(data.data);
                }

            } catch (err) {
                setError(err);
            } finally {
                setLoding(false);
            }
        }

        fetchProfile();
    }, [dispatch, username]);

    if (loading) return (
        <div className="userpage-section">
            <h1>
                loading
            </h1>
        </div>
    );

    if (!profile || error) return (
        <div className="userpage-section">
            <h1>
                Error
            </h1>
        </div>
    );

    return (
        <section className="mypage-section">
            <article className="my-information">
                <p className="mypage-title">{ profile.username }</p>
                <div className="profileimg-inner">
                    <img className="profile-preview" src={axios.defaults.baseURL + profile.photo} alt='profile'></img>
                </div>
                <div className="infomation-inner">
                    <p>{profile.email}</p>
                    <p>{profile.introduce}</p>
                </div>
            </article>
            <article className="my-write">
                <p className="mypage-title write-title">작성한 글</p>
                <div>
                </div>
            </article>
        </section>
    )
}

export default UserContainer

