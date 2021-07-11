import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {

    return (
        <Route  { ...rest }
            component={ (props) => ( 
                (!isAuthenticated)? 
                <Component {...props} />
                :
                <Redirect to="/home" />
            )}
        />
    )
}


PublicRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
