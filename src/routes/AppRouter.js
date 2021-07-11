import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import { AuthScreen } from '../pages/AuthScreen';
import { HomeScreen } from '../pages/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={AuthScreen} />
                    <Route path="/home" component={HomeScreen} />
                    <Redirect to="/login" />

                </Switch>
            </div>
        </Router>
    )
}
