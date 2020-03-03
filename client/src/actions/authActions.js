import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import { setCurrentUserAction } from "../redux-actions/auth.actions";
import { setErrorAction } from "../redux-actions/errors.actions";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUserAction(decoded));
      dispatch(setErrorAction({}))
    })
    .catch(err =>
      dispatch(setErrorAction(err.response.data))
    );
};

export const synchroniseUserState = (dispatch) => {
  const jwt = localStorage.getItem('jwtToken')
  if (jwt) {
    const decoded = jwt_decode(jwt);
    // Set current user
    dispatch(setCurrentUserAction(decoded));
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUserAction({}));
};
