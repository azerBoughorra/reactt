import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

// Set logged in user
export const setCurrentUserAction = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoadingAction = () => {
    return {
        type: USER_LOADING
    };
};
