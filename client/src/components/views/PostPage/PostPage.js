import React from 'react'
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import PostContainer from '../PostContainer/PostContainer';

function PostPage({ match }) {
    return (
        <div>
            <Nav />
            <PostContainer doc={
                match.params.doc ? match.params.doc : 1
                }/>
        </div>
    )
}

export default PostPage
