import { RESERVE_HOUSE } from "../actions/types";

export const reserveHouseAction = house => {
    return {
        type: RESERVE_HOUSE,
        payload: house
    };
};