import { RESERVE_HOUSE } from "../actions/types";

const isEmpty = require("is-empty");

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
        default:
            return state;
    }
}