import axios from "axios";

const SIGNUP_REQUEST = 'signup/REQUEST';
const SIGNUP_SUCCESS = 'signup/REQUEST';
const SIGNUP_FAILURE = 'signup/REQUEST';

const requestSignup = creds => ({
    type: SIGNUP_REQUEST,
    isFetching: true,
    creds,
});

const receiveSignup = () => ({
    type: SIGNUP_SUCCESS,
    isFetching: false,
});

const SignupError = msg => ({
    type: SIGNUP_FAILURE,
    isFetching: false,
    msg,
});

export function SignupUser(creds) {
    return async (dispatch) => {
        const url = '/users/create/';
        const options = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: creds.email,
                username: creds.username,
                password: creds.password,
            }
        }
        
        dispatch(requestSignup(creds));

        const res = await axios(options);
        const data = res.data;

        if (res.statusText === "Created" && res.status === 201 && data.message === "ok") {
            dispatch(receiveSignup());
        } else {
            dispatch(SignupError(data.message));
            throw new Error(data);
        }

        return data;
    }
}

const initialState = {
    isFetching: false,
}

export default function signup(state = initialState, action) {
    switch(action.type) {
        case SIGNUP_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: '', 
            });
        case SIGNUP_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
            });
        default:
            return state;
    }
}