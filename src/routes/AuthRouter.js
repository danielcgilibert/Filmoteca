import React from "react";
import { BrowserRouter as  Redirect, Switch, Route} from "react-router-dom";

import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div>
        <Switch>
          <Route  exact path="/auth/login" component={LoginScreen} />
          <Route  exact path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/login" />
        </Switch>
    </div>
  );
};