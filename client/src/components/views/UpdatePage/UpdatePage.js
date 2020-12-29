import React, { useState, useEffect } from 'react';
import {
    useDispatch,
} from 'react-redux';
import {
    useParams
} from 'react-router-dom';
import {
    getReadPost,
} from '../../../store/reducer/api';
import MarkdownContainer from '../MarkdownContainer/MarkdownContainer';

function UpdatePage() {
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

    if (loading) return (
        <div>
            <h1>
                loading
            </h1>
        </div>
    );

    if (!postData || error) return (
        <div>
            <h1>
                Error
            </h1>
        </div>
    );

    return (
        <div className="study-container">
            <p className="study-title">글 작성하기</p>
            <MarkdownContainer defaultTitle={postData.title} defaultbody={postData.body} postId={id} />
        </div>
    )
}

export default UpdatePage
