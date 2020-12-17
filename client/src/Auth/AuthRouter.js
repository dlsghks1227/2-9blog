import React from 'react'
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect,
} from 'react-router-dom'

function AuthRoute({ component: Component, render, ...rest }) {
    const { isAuthenticated } = useSelector(state => ({
        isAuthenticated: state.login.isAuthenticated,
    }));

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