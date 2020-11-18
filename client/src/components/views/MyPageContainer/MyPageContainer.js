import React from 'react'
import './MyPageContainer.scss'
function MyPageContainer() {
    return (
        <section className="mypage-section">
            <article>
                <p>이름 : 홍길동</p>
                <p>아이디 : abc123</p>
                <p>이메일 : abc123@defg.com</p>
            </article> 
            <article>
                <div>
                    <p>국가 : Korea</p>
                    <p>웹사이트 : http://abc.defg.com</p>
                    <p>자기소개 : Hi</p>

                </div>
                <div>
                    <p>글 개수 : 0</p>
                    <p>글 작성 목록</p>
                </div>
            </article>
        </section>
    )
}

export default MyPageContainer

