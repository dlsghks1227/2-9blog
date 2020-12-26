import React, {
    useState,
    useEffect,
} from 'react';
//simport { db } from '../../../fbase';
import {
    NavLink,
    Redirect
} from 'react-router-dom'
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import {
    getPost,
} from '../../../store/reducer/api';
import {
    Media,
    ListGroup,
    Pagination
} from 'react-bootstrap';
import './PostContainer.scss';

// const docRef = db.collection("notice").doc("written").collection("React").doc("d259p3ONutczP5N0glmU");


function PostContainer({ doc }) {
    const { isAuthenticated } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
    }));
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(doc);
    const [maxPage, setMaxPage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoding] = useState(false);

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const onGetPost = (page) => dispatch(getPost(page));
        const fetchPosts = async () => {
            try {
                setError(null);
                setLoding(true);

                setPosts(null);

                const data = await onGetPost(currentPage);
                if (data && data['results']) {
                    setMaxPage(Math.round(data.count / 10));
                    setPosts(data);
                } else {
                    throw new Error(data);
                }
            } catch (err) {
                setError(err);
                console.log(err);
            } finally {
                setLoding(false);
            }
        }

        fetchPosts();
    }, [dispatch, currentPage]);

    const PageContainer = () => {
        return (
            <Pagination className="m-5">
                <Pagination.First href="/post/1" />
                <Pagination.Prev href={posts.previous ? `/post/${(parseInt(currentPage) - 1)}` : `/post/${currentPage}`} />
                {
                    (parseInt(currentPage)) >= 5 ? (<Pagination.Ellipsis disabled></Pagination.Ellipsis>) : (<div />)
                }
                {
                    maxPage < 10 ?
                        (
                            Array.apply(0, Array(maxPage)).map((x, i) => {
                                const isActivated = ((parseInt(currentPage) - 1) === i);
                                return <Pagination.Item key={i} active={isActivated} href={`/post/${i + 1}`} >{i + 1}</Pagination.Item>
                            })
                        ) : (
                            // 페이지가 10개 이상일 때
                            Array.apply(0, Array(7)).map((x, i) => {
                                const count = (parseInt(currentPage)) + (i - 4);
                                const isActivated = ((parseInt(currentPage) - 1) === count);
                                if (count >= 0 && count < maxPage) {
                                    return (<Pagination.Item key={i} active={isActivated} href={`/post/${count + 1}`} >{count + 1}</Pagination.Item>);
                                }
                            })
                            // Array.apply(0, Array(maxPage)).map((x, i) => {
                            //     const isActivated = ((parseInt(currentPage) - 1) === i);
                            //     return <Pagination.Item key={i} active={isActivated} href={`/post/${i + 1}`} >{i + 1}</Pagination.Item>
                            // })
                        )
                    // [...Array(10)].map((x, i) => {
                    //     return (
                    //         <Pagination.Item key={i}>{x}</Pagination.Item>
                    //     )
                    // })
                }
                {
                    (parseInt(currentPage)) <= maxPage - 4 ? (<Pagination.Ellipsis disabled></Pagination.Ellipsis>) : (<div />)
                }
                <Pagination.Next href={posts.next ? `/post/${(parseInt(currentPage) + 1)}` : `/post/${currentPage}`} />

                <Pagination.Last href={`/post/${maxPage}`} />
            </Pagination>
        );
    }

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
        <div className="post-container">
            <h1>
                loading
            </h1>
        </div>
    );

    if (!posts || error) return (
        <div className="post-container">
            <h1>Error</h1>
        </div>
    );

    return (
        <div className="post-container">
            <ListGroup>
                {
                    posts['results'].map(post => {
                        const createdDate = new Date(post.created_at).toISOString().split('T');
                        const createdTime = createdDate[1].split('.')[0];

                        return (
                            <NavLink className="list-group-item list-group-item-action" key={post.id} to={`/post/read/${post.id}`}>
                                <Media>
                                    <Media.Body>
                                        <h1 className="d-inline-block text-truncate" style={{ maxWidth: "20rem", margin: 'auto' }}>{post.title}</h1>
                                        <hr></hr>
                                        <p className="post-time">{createdDate[0] + ' ' + createdTime}</p>
                                        <p>{post.username}</p>
                                    </Media.Body>
                                </Media>
                            </NavLink>
                        )
                    })
                }
                <div>
                    {/* <h1>{titlePost}</h1>
                    <hr></hr>
                    <section dangerouslySetInnerHTML={{ __html: bodyPost }}/> */}
                </div>
            </ListGroup>
            <PageContainer />
        </div>
    )
}

export default PostContainer
