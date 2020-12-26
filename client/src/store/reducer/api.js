const API_REQUEST = 'api/REQUEST';
const API_SUCCESS = 'api/SUCCESS';
const API_FAILURE = 'api/FAILURE';

const requestAPI = () => ({
    type: API_REQUEST,
    isFetching: true,
})

const receiveAPI = () => ({
    type: API_SUCCESS,
    isFetching: false,
})

const errorAPI = () => ({
    type: API_FAILURE,
    isFetching: false,
})

const initialState = {
    isFetching: false,
}


// --------유저 관련--------
// 토근 유효성 검사
export function validateUser() {
    // 스토어의 상태에 접근하기 위해 getState 사용
    return async (dispatch, getState) => {
        const { login } = getState();

        if (!login.token || !login.username || !login.email) {
            return { message: 'fail' };
        }

        const url = '/users/validate/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + login.token
            },
            body: JSON.stringify({
                username: login.username
            }),
        };

        dispatch(requestAPI());

        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200 && data.message === "ok") {
            dispatch(receiveAPI());
        } else {
            dispatch(errorAPI());
            throw new Error(data);
        }

        return data;
    }
}

// 유저 프로필 불러오기
export function getUserProfile(username) {
    return async (dispatch) => {

        const url = '/users/profile/?username=' + username;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        dispatch(requestAPI());
        
        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200) {
            dispatch(receiveAPI());
        } else {
            dispatch(errorAPI());
            throw new Error(data);
        }

        return data;
    }
}
// --------유저 관련--------

// --------게시글 관련--------
// 게시글 API
export function getPost(page) {
    return async (dispatch) => {

        const url = 'http://112.185.119.106:8000/posts/?page=' + page;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        dispatch(requestAPI());

        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200) {
            dispatch(receiveAPI());
        } else {
            dispatch(errorAPI());
            throw new Error(data);
        }

        return data;
    }
}

export function getReadPost(id) {
    return async (dispatch) => {

        const url = '/posts/' + id;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        dispatch(requestAPI());

        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200) {
            dispatch(receiveAPI());
        } else {
            dispatch(errorAPI());
            throw new Error(data);
        }

        return data;
    }
}

export function createPost(postData) {
    return async (dispatch, getState) => {
        const { login } = getState();

        if (!postData.title || !postData.body || !login.token || !login.username) {
            return { message: 'fail' };
        }

        const url = '/posts/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + login.token
            },
            body: JSON.stringify({
                title: postData.title,
                body: postData.body,
                category: postData.category,
                username: login.username,
            })
        }

        dispatch(requestAPI());

        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200) {
            dispatch(receiveAPI());
        } else {
            dispatch(errorAPI());
        }

        return data;
    }
}
// --------게시글 관련-------- 

export default function api(state = initialState, action) {
    switch (action.type) {
        case API_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case API_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
            });
        case API_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
            });
        default:
            return state;
    }
}
