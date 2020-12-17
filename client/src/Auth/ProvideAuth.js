import React, { createContext, useContext, useState } from 'react';
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../store/reducer/login';

const authContext = createContext();

const useProvideAuth = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const validate = async () => {
        if (isAuthenticated === true && localStorage.getItem('token') === null)
            return;

        const url = 'users/validate/';
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();

            if (res.ok && res.status === 200 && data.message === "ok") {
                setAuthenticated(true);
            }
            else {
                localStorage.removeItem('token');
                setAuthenticated(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const login = async ({ email, password }) => {
        const url = 'users/login/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();

            if (res.ok && res.status === 200 && data.message === "ok") {
                console.log(res.ok);
                localStorage.setItem('token', data.token);
                setAuthenticated(true);
            }

        } catch (err) {
            console.log(err);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuthenticated(false);
    }

    return {
        isAuthenticated,
        validate,
        login,
        logout,
    }
}

const ProvideAuth = ({ isAuthenticated, onLoginUser, onLogoutUser, children }) => {
    const auth = { isAuthenticated, onLoginUser, onLogoutUser };
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated,

});

const mapDispatchToProps = dispatch => ({
    onLoginUser: (creds) => dispatch(loginUser(creds)),
    onLogoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProvideAuth);