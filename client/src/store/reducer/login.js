const LOGIN_REQUEST = 'login/REQUEST';
const LOGIN_SUCCESS = 'login/SUCCESS';
const LOGIN_FAILURE = 'login/FAILURE';

const LOGOUT_REQUEST = 'Logout/REQUEST';
const LOGOUT_SUCCESS = 'Logout/SUCCESS';
// const LOGOUT_FAILURE = 'Logout/FAILURE';

const requestLogin = creds => ({
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
});

const receiveLogin = user => ({
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.token
});

const loginError = msg => ({
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    msg
});

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

export function loginUser(creds) {
    const url = 'users/login/';
    const options = {
        method: 'POST',
        headers: {
            'Contents-Type': 'application/json',
        },
        body: JSON.stringify({
            email: creds.email,
            password: creds.password,
        })
    }

    return dispatch => {
        dispatch(requestLogin(creds));

        return fetch(url, options)
            .then(res => res.json().then(data => ({ res, data })))
            .then(({ res, data }) => {
                if (res.ok && res.status === 200 && data.message === "ok") {
                    localStorage.setItem('token', data.token);

                    dispatch(receiveLogin(data));
                }
                else
                {
                    dispatch(loginError(data.message));
                    return Promise.reject(data);
                }
            })
            .catch(err => console.log("Error: ", err));
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('token');
        dispatch(receiveLogout());
    }
}

const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
}

// Redux는 변경되지 않은 객체를 반환해야하므로
// Object.assing으로 빈 객체를 첫 번째 인수로 사용하여 반환 값이 고유한 객체인지 확인한다.
export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {

            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {

            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {

            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        default:
            return state;
    }
}