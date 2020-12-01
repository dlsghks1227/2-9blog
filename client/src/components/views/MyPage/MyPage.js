import React, { useState } from 'react';
import Nav from '../Nav/Nav'
import Header from '../Header/Header';
import MyPageContainer from '../MyPageContainer/MyPageContainer';
import Footer from '../Footer/Footer';



function MyPage() {
    const [isClicked, ClickOrNot] = useState(false);
    const navBtnClicked = ()=>{
        ClickOrNot(!isClicked);
    }

    return (
        <div>
            <Header onClicked={navBtnClicked}/>
            <Nav navState={isClicked}/>
            <MyPageContainer />
            <Footer />
        </div>
    )
}

export default MyPage
