import React,{useState, useRef} from 'react';


const SignUp = () => { //이걸 데이터베이스에 보내고

    //값을 가져와서, 미들웨어에서 데이터베이스에 보낸다.

    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [usePw, setUserPw] = useState('');
    
    const emailRef = useRef();
    const idRef = useRef();
    const pwRef = useRef();
    

    const confirmDataExist=()=>{
        if(emailRef.current.value === "" || idRef.current.value === ""|| pwRef.current.value === "")        
            alert("정보를 다 기입해주세요.");
        else{
            

        }    
    }

    return (
        <div className="signUpPage">
            <input type="text" placeholder="이메일을 입력해주세요." ref={emailRef} size="20"/><br></br>
            <input type="text" placeholder="아이디를 입력해주세요." ref={idRef} size="20"/><br></br>
            <input type="password" placeholder="사용하실 비밀번호를 입력해주세요." ref={pwRef} size="20"/>
            <button onClick={confirmDataExist}>클릭</button>
        </div>
        //아마 이제 회원가입 부분에서 아이디를 보내고 토큰?을 생성하면 그걸 로그인 부분에서 체크를 해야할 것 같다.
    )
}

export default SignUp;