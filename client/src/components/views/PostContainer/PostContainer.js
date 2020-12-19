import React, {
    useState,
    useEffect,
} from 'react';
//simport { db } from '../../../fbase';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    getPost,
} from '../../../store/reducer/post';
import './PostContainer.scss';

// const docRef = db.collection("notice").doc("written").collection("React").doc("d259p3ONutczP5N0glmU");


function PostContainer({ doc }) {
    const { isAuthenticated } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
    }));
    const dispatch = useDispatch();
    const onGetPost = (page) => dispatch(getPost(page));

    const [error, setError] = useState(null);
    const [loading, setLoding] = useState(false);

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setError(null);
                setLoding(true);

                setPosts(null);

                const data = await onGetPost(doc);
                if (data && data['results']) {
                    setPosts(data);
                    console.log(data);
                } else {
                    throw new Error("err");
                }
            } catch (err) {
                console.log(err);
                setError(err);
            } finally {
                setLoding(false);
            }
        }

        fetchPosts();
    }, []);

    // https://kyounghwan01.github.io/blog/React/exhaustive-deps-warning/#_2-useeffect-%EB%82%B4%EB%B6%80%EC%97%90-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%A0%95%EC%9D%98%ED%95%9C-%EA%B2%BD%EC%9A%B0

    // docRef.get()
    //     .then(doc => {
    //         if (!doc.exists) {
    //             console.log('No such document!');
    //         } else {
    //             const body = doc.data().body;
    //             const title = doc.data().title;
    //             setBodyPost(body);
    //             setTitlePost(title);
    //             console.log(body, title)
    //         }
    //     })
    //     .catch(err => {
    //         console.log('Error getting document', err);
    //     });
    if (loading) return (
        <div>
            <h1>
                loading
            </h1>
        </div>
    );

    if (!posts || error) return (
        <div>
            <h1>
                Error
            </h1>
        </div>
    );

    return (
        <div className="post-container">
            <article>
                {
                    posts['results'].map(post => {
                        const createdTime = new Date(post.created_at);
                        return (
                            <div key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{createdTime.toString()}</p>
                                <p></p>
                                <hr></hr>
                            </div>
                        )
                    })
                }
                <div>
                    {/* <h1>{titlePost}</h1>
                    <hr></hr>
                    <section dangerouslySetInnerHTML={{ __html: bodyPost }}/> */}
                </div>
            </article>
        </div>
    )
}

export default PostContainer
