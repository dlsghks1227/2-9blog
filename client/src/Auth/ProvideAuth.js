import React, { createContext, useContext, useState, useEffect } from 'react';

const authContext = createContext();

const useProvideAuth = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        validate();
    }, [])

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

    const login = async ({email, password}) => {
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
            
        } catch(err) {
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

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}