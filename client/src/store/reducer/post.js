const POST_REQUEST = 'post/REQUEST';
const POST_SUCCESS = 'post/SUCCESS';
const POST_FAILURE = 'post/FAILURE';

const requestPost = () => ({
    type: POST_REQUEST,
    isFetching: true,
});

const receivePost = () => ({
    type: POST_SUCCESS,
    isFetching: false,
});

const postError = () => ({
    type: POST_FAILURE,
    isFetching: false,
});

export function getPost(page) {
    return async (dispatch) => {

        const url = '/posts/?page=' + page;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        dispatch(requestPost());

        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200) {
            dispatch(receivePost());
        } else {
            dispatch(postError());
        }

        return data;
    }
}

const initialState = {
    isFetching: false,
}

export default function post(state = initialState, action) {
    switch (action.type) {
        case POST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case POST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
            });
        case POST_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
            });
        default:
            return state;
    }
}