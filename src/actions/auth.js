import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/config";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const setError = (msgError) => ({
  type: types.uiSetError,
  payload: msgError,
});

export const removeError = () => ({
  type: types.uiRemoveError,
});

export const startLoading = () => ({
  type: types.uiStartLoading
});

export const finishLoading = () => ({
  type: types.uiFinishLoading
});


export const logout = () => ({
  type: types.logout
})

export const registerEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
        await user.updateProfile({ displayName: name})
        dispatch(login(user.uid, user.displayName));
      }).catch(({message}) => {
        dispatch(setError(message))
      })
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(finishLoading());
        dispatch(removeError())
        dispatch(login(user.uid, user.displayName));
      }).catch(({message}) => {
        dispatch(finishLoading());
        dispatch(setError(message))
      })
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(removeError())
        dispatch(login(user.uid, user.displayName));
      }).catch(({message}) => {
        dispatch(setError(message))
      })
  };
};

export const startLogout = () => {
  return async(dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
    
  }
}
