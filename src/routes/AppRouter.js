import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthRouter } from "./AuthRouter";
import { DetailsScreen } from "../pages/DetailsScreen";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <div className="spinner text-center ">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <Router>
            <div>
            <Switch>
            <PublicRoute  path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn} />
            <PrivateRoute path="/home" component={HomeScreen} isAuthenticated={isLoggedIn} />
            <PrivateRoute path="/details/:id" component={DetailsScreen} isAuthenticated={isLoggedIn} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    );
  }
};
