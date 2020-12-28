import React, {
    useState,
    useEffect,
} from 'react';
//simport { db } from '../../../fbase';
import {
    NavLink,
    Link,
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
    Pagination,
    Button
} from 'react-bootstrap';
import './PostContainer.scss';

// const docRef = db.collection("notice").doc("written").collection("React").doc("d259p3ONutczP5N0glmU");


function PostContainer({ doc }) {
    const { isAuthenticated } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
    }));
    const dispatch = useDispatch();

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

                const data = await onGetPost(doc);
                console.log(data);
                if (data && data['results']) {
                    setMaxPage(Math.round(data.count / 10) ? Math.round(data.count / 10) : 1);
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
    }, [dispatch, doc]);

    const PageContainer = () => {
        return (
            <div className="post-pagination">
                <Pagination className="post-pagination-container">
                    <NavLink className="page-link" to={"/post/1"}>&lt;&lt;</NavLink>
                    <NavLink className="page-link" to={posts.previous ? `/post/${(parseInt(doc) - 1)}` : `/post/${doc}`}>&lt;</NavLink>
                    {
                        (parseInt(doc)) >= 5 ? (<Pagination.Ellipsis disabled></Pagination.Ellipsis>) : (<div />)
                    }
                    {
                        maxPage < 10 ?
                            (
                                Array.apply(0, Array(maxPage)).map((x, i) => {
                                    const isActivated = ((parseInt(doc) - 1) === i);
                                    return (
                                        // <NavLink className="page-link active" to={`/post/${i + 1}`} key={i}>
                                        <div className={`page-item ${isActivated ? "active" : ""}`} key={i}><NavLink className="page-link" to={`/post/${i + 1}`}>{i + 1}</NavLink></div>
                                        // </NavLink>
                                    );
                                })
                            ) : (
                                // 페이지가 10개 이상일 때
                                Array.apply(0, Array(7)).map((x, i) => {
                                    const count = (parseInt(doc)) + (i - 4);
                                    const isActivated = ((parseInt(doc) - 1) === count);
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
                        (parseInt(doc)) <= maxPage - 4 ? (<Pagination.Ellipsis disabled></Pagination.Ellipsis>) : (<div />)
                    }
                    <NavLink className="page-link" to={posts.next ? `/post/${(parseInt(doc) + 1)}` : `/post/${doc}`}>&gt;</NavLink>
                    <NavLink className="page-link" to={`/post/${maxPage}`}>&gt;&gt;</NavLink>
                </Pagination>
                <NavLink to={`/write`}><Button variant="outline-primary">Write</Button></NavLink>
            </div>
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
                        const createdDate = post.created_at.split('T');
                        const createdTime = createdDate[1].split('.')[0];

                        return (
                            <NavLink className="list-group-item list-group-item-action" key={post.id} to={`/post/read/${post.id}`}>
                                <Media>
                                    <Media.Body>
                                        <h3 className="d-inline-block text-truncate" style={{ maxWidth: "20rem", margin: 'auto' }}>{post.title}</h3>
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
