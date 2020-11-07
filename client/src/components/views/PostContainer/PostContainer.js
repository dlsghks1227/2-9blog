import React, { useState } from 'react';
import { db } from '../../../fbase';
import './PostContainer.scss';

const docRef = db.collection("notice").doc("written").collection("React").doc("d259p3ONutczP5N0glmU");


function PostContainer() {
    let [bodyPost, setBodyPost] = useState("")
    let [titlePost, setTitlePost] = useState("")

    docRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                const body = doc.data().body;
                const title = doc.data().title;
                setBodyPost(body);
                setTitlePost(title);
                console.log(body, title)
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    return (
        <div className="post-container">
            <article>
                <h1>{titlePost}</h1>
                <hr></hr>
                <section dangerouslySetInnerHTML={ {__html: bodyPost} }>
                </section>
            </article>
        </div>
    )
}

export default PostContainer
