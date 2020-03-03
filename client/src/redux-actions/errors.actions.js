import { GET_ERRORS } from "../actions/types"

export const setErrorAction = (error) => {
    return {
        type: GET_ERRORS,
        payload: error
    }
}
