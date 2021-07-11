import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { RegisterScreen } from '../pages/RegisterScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth/login" component={LoginScreen} />
                    <Route path="/auth/register" component={RegisterScreen} />
                    <Route path="/home" component={HomeScreen} />
                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
