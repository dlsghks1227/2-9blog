import React , { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

import { db } from '../../../../fbase';

function NoticeShow() {
    const [showNotice, setShowNotice] = useState("");

    let noticeArr = ["전체보기"];

    const noticeDef = db.collection("notice").get()
    .then(snapshot => {
      snapshot.forEach(doc => {
          noticeArr.push(doc.id);
          let showNoticeArr = noticeArr.map((notice, index) => (<li key={index}><NavLink to={`/post/${notice}`}>{notice}</NavLink></li>));
          setShowNotice(showNoticeArr)
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
      
      

    return (
        <div>
            <ul className="notice-list">{showNotice}
            </ul>
        </div>
    )
}

export default NoticeShow
