import React from 'react'
import {
    Route,
    Redirect,
} from 'react-router-dom'

import { useAuth } from './ProvideAuth';

function AuthRoute({ component: Component, render, ...rest }) {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={props =>
                auth.isAuthenticated ? (
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