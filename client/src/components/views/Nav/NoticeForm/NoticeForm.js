import React, { useState } from 'react'
import { db } from '../../../../fbase';

function NoticeForm() {
    
    const [notice, setNotice] = useState("");
    const noticeChangeHandler = (e) => {
        setNotice(e.target.value);
    };

    const noticeSubmitHandler = (e) => {
        db.collection("notice").doc("written").collection(notice).add({})
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={noticeSubmitHandler}>
                <input type="text" value={notice} onChange={noticeChangeHandler} />
                <button type="submit">전송</button>
            </form>
        </div>
    )
}

export default NoticeForm;