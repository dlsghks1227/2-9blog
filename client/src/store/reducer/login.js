const LOGIN_REQUEST = 'login/REQUEST';
const LOGIN_SUCCESS = 'login/SUCCESS';
const LOGIN_FAILURE = 'login/FAILURE';

const LOGOUT_REQUEST = 'Logout/REQUEST';
const LOGOUT_SUCCESS = 'Logout/SUCCESS';
// const LOGOUT_FAILURE = 'Logout/FAILURE';


// ----- 로그인 액션 -----
const requestLogin = creds => ({
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
});

const receiveLogin = user => ({
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    username: user.username,
    token: user.token
});

const loginError = msg => ({
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    msg
});
// ----------------------


// ----- 로그아웃 액션 -----
const requestLogout = () => ({
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
});

const receiveLogout = () => ({
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
});
// ------------------------


// ----- 미들웨어? -----
export function loginUser(creds) {
    return async (dispatch) => {
        const url = '/users/login/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: creds.email,
                password: creds.password,
            })
        }

        dispatch(requestLogin(creds));

        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200 && data.message === "ok") {
            dispatch(receiveLogin(data));
        } else {
            dispatch(loginError(data.message));
        }

        return data;
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        dispatch(receiveLogout());
    }
}
// --------------------


// ----- 리듀서 선언 -----
const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
}

// Redux는 변경되지 않은 객체를 반환해야하므로
// Object.assing으로 빈 객체를 첫 번째 인수로 사용하여 반환 값이 고유한 객체인지 확인한다.
export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                username: action.username,
                token: action.token,
                errorMessage: '',
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.msg,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                username: '',
                token: '',
            });
        default:
            return state;
    }
}
// ----------------------