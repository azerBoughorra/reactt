import { RESERVE_HOUSE, CANCEL_RESERVE_HOUSE } from "../actions/types";

// const isEmpty = require("is-empty");

const initialState = {
    reservedHouses: []

};

export default function (state = initialState, action) {
    switch (action.type) {
        case RESERVE_HOUSE:
            return {
                ...state,
                reservedHouses: [
                    ...state.reservedHouses,
                    action.payload
                ],
            };
        case CANCEL_RESERVE_HOUSE:
            state.reservedHouses = state.reservedHouses.filter(h => h._id !== action.payload)
            return state

        default:
            return state;
    }
}