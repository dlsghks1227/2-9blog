import React from 'react';
import './LandingContainer.scss';
import write from './write.png';
import ebbinghaus from './ebbinghaus-diagram.png';
import { NavLink } from "react-router-dom";

function LandingContainer() {
    return (
        <div id="landing-container">
            <div className="img-inner">
                <img src={write} />
                <div className="text-inner">
                    <p className="study-text">하루동안 공부한 것을</p>
                    <p className="write-text">기록해 보세요.</p>
                </div>
            </div>
            <section className="Ebbinghaus-part">
                <p className="ebbinghaus-title">에빙하우스의 망각 곡선에 따르면</p>
                <div className="graph-inner">
                    <img src={ebbinghaus} />
                </div>
                <div>
                    <p>사람은 하루가 지나갈수록 기억을 잊어버리지만,</p>
                    <p>주기적인 복습을 하면 할수록</p>
                    <p>망각하는데 걸리는 시간이 길어집니다.</p>
                </div>
                <div>
                    <p>이 블로그와 함께</p>
                    <p>배운 것을 기록하면서</p>
                    <p>기억을 되새김질 해보는 것은 어떨까요?</p>
                </div>
            </section>
            <section className="blog-profit">
                <p className="profit-title">이 블로그를 사용한다면</p>
                <div>
                    <article>
                        <p>쉽게 잊어버릴 수 있는 정보를 기록해 놓을 수 있다.</p>
                    </article>
                    <article>
                        <p>다른 회원이 작성한 글을 보면서 새로운 정보를 얻을 수 있다.</p>
                    </article>
                    <article>
                        <p>마음에 드는 글을 모아 볼 수 있다.</p>
                    </article>
                </div>
            </section>
            <section className="blog-manual">
                <p className="manual-title">블로그 사용방법은</p>
                <div>
                    <article className="article-left">
                        <p>회원가입 or 로그인</p>
                    </article>
                    <article className="article-center">
                        <p>게시판 생성 or 들어가기</p>
                    </article>
                    <article className="article-right">
                        <p>글 작성하기</p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default LandingContainer
