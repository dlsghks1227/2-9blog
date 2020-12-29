import React, { useState, useEffect } from 'react';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    getReadPost,
} from '../../../store/reducer/api';
import {
    useHistory,
    NavLink,
    useParams 
} from 'react-router-dom';
import {
    Button
} from 'react-bootstrap'
import MEDitor from "@uiw/react-md-editor";

import './ReadPage.scss'

function ReadPage() {
    const history = useHistory();
    const { username } = useSelector(state => ({
        username: state.login.username,
    }));

    const dispatch = useDispatch();
    const { id } = useParams();

    const [error, setError] = useState(null);
    const [loading, setLoding] = useState(false);

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const onGetReadPost = (index) => dispatch(getReadPost(index));
        const fetchPost = async () => {
            try {
                setError(null);
                setLoding(true);

                setPostData(null);

                const data = await onGetReadPost(id);

                if (data) {
                    setPostData(data);
                } else {
                    throw new Error(data.data);
                }

            } catch (err) {
                setError(err);
            } finally {
                setLoding(false);
            }
        }

        fetchPost();
    }, [dispatch, id]);

    const onModifiedClick = async (event) => {
        event.preventDefault();
        history.push(`/post/update/${id}`);
    }

    if (loading) return (
        <div className="read-container">
            <h1>
                loading
            </h1>
        </div>
    );

    if (!postData || error) return (
        <div className="read-container">
            <h1>
                Error
            </h1>
        </div>
    );

    const createdDate = postData.created_at.split('T');
    const createdTime = createdDate[1].split('.')[0];

    return (
        <div className="read-container">
            <h1>{postData.title}</h1>
            <p className="post-time">{createdDate[0] + ' ' + createdTime}</p>
            <p>author: <NavLink to={`/users/${postData.username}`}>{postData.username}</NavLink></p>
            <hr style={{ height: '1px', backgroundColor : "#cccccc", marginBottom:'3rem'}}/>
            <MEDitor.Markdown source={postData.body}/>
            {
                username && username == postData.username ? (
                    <Button variant="outline-primary" className="md-submit-button" size="lg" onClick={onModifiedClick}>수정</Button>
                ) : (<div/>)
            }
        </div>
    )
}

export default ReadPage;