const VALIDATE_REQUEST = 'validate/REQUEST';
const VALIDATE_SUCCESS = 'validate/SUCCESS';
const VALIDATE_FAILURE = 'validate/FAILURE';

const requestValidate = () => ({
    type: VALIDATE_REQUEST,
    isFetching: true
});

const receiveValidate = () => ({
    type: VALIDATE_SUCCESS,
    isFetching: false
});

const ValidateError = () => ({
    type: VALIDATE_FAILURE,
    isFetching: false
});

export function validateUser() {
    // 스토어의 상태에 접근하기 위해 getState 사용
    return async (dispatch, getState) => {
        const { login } = getState();

        console.log(login);

        if (!login.isAuthenticated || !login.token || !login.email) {
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
                email: login.email
            }),
        };

        dispatch(requestValidate());

        const res = await fetch(url, options);
        const data = await res.json();

        if (res.ok && res.status === 200 && data.message === "ok") {
            dispatch(receiveValidate());
        } else {
            dispatch(ValidateError());
        }

        return data;
    }
}

const initialState = {
    isFetching: false,
}

export default function validate(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case VALIDATE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
            });
        case VALIDATE_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
            });
        default:
            return state;
    }
}

// https://velopert.com/3401