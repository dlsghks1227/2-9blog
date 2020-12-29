import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    NavLink,
} from 'react-router-dom'
import {
    Media,
    ListGroup
} from 'react-bootstrap'
import {
    getUserProfile,
    getUserPost,
} from '../../../store/reducer/api';
import '../MyPage/MyPageContainer.scss';

function UserContainer({ username }) {
    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [loading, setLoding] = useState(false);

    const [profile, setProfile] = useState(null);
    const [userPost, setUserPost] = useState(null);

    useEffect(() => {
        const onGetUserProfile = (name) => dispatch(getUserProfile(name));
        const onGetUserPost = (name) => dispatch(getUserPost(name));

        const fetchProfile = async () => {
            try {
                setError(null);
                setLoding(true);

                setProfile(null);
                setUserPost(null);

                const profileData = await onGetUserProfile(username);
                const postData = await onGetUserPost(username);
                if (profileData && profileData.message === "ok" && profileData.data && postData) {
                    setProfile(profileData.data);
                    setUserPost(postData);
                } else {
                    throw new Error([profileData.data]);
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
        <div className="mypage-section">
            <div className="edit-information">
                <div className="mypage-title">
                    <p>{profile.username}</p>
                </div>
                <div className="profileimg-inner">
                    <img className="profile-preview" src={axios.defaults.baseURL + profile.photo} alt='profile'></img>
                </div>
                <div className="infomation-inner">
                    <h3>{profile.email}</h3>
                    <p>{profile.introduce}</p>
                </div>
            </div>

            <div className="user-post-list">
                <div className="mypage-title">
                    <p>작성한 글</p>
                </div>
                <ListGroup className="my-write">
                    {
                        userPost['results'].map(post => {
                            const createdDate = post.created_at.split('T');
                            const createdTime = createdDate[1].split('.')[0];

                            return (
                                <NavLink className="list-group-item list-group-item-action w-100" style={{ border: '0px' }} key={post.id} to={`/post/read/${post.id}`}>
                                    <Media>
                                        <Media.Body className="my-list">
                                            <h5 className="d-inline-block text-truncate">{post.title}</h5>
                                            <p className="">{createdDate[0] + ' ' + createdTime}</p>
                                        </Media.Body>
                                    </Media>
                                </NavLink>
                                // <NavLink className="list-group-item list-group-item-action my-list" key={post.id} to={`/post/read/${post.id}`}>
                                //     <Media>
                                //         <Media.Body>
                                //             <p className="d-inline-block text-truncate" style={{ maxWidth: "20rem", margin: 'auto' }}>{post.title}</p>
                                //             <p className="post-time">{createdDate[0] + ' ' + createdTime}</p>
                                //         </Media.Body>
                                //     </Media>
                                // </NavLink>
                            )
                        })
                    }
                </ListGroup>
            </div>
        </div>
    )
}

export default UserContainer

