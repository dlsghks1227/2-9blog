import React, {
    useEffect
} from 'react'
import { 
    useSelector,
    useDispatch,
 } from 'react-redux';
 import {
     validateUser,
 } from '../store/reducer/api'
 import {
     logoutUser,
 } from '../store/reducer/login'
import {
    Route,
    Redirect,
} from 'react-router-dom'

function AuthRoute({ component: Component, render, ...rest }) {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
    }));

    // 비용이 너무 크면 다른 방법을 생각 해보겠습니다.
    // 인증 페이지 접근 전 토큰 검사
    useEffect(() => {
        const onValidateUser = () => dispatch(validateUser());
        const onLogoutUser = () => dispatch(logoutUser());
        const fetchValidateUser = async () => {
            try {
                const data = await onValidateUser();
                if (!data || data.message === "fail") {
                    throw new Error(data);
                }
            } catch (err) {
                console.log(err);
                onLogoutUser();
            }
        }
        if (isAuthenticated === true) {
            fetchValidateUser();
        }
    }, [dispatch, isAuthenticated])

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    render ? render(props) : <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname:"/login",
                        state: { from: props.location }
                    }}
                    />
                )
            }
        />
    )
}

export default AuthRoute;