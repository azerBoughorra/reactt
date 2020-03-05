import { RESERVE_HOUSE, CANCEL_RESERVE_HOUSE } from "../actions/types";

export const reserveHouseAction = house => {
    return {
        type: RESERVE_HOUSE,
        payload: house
    };
};
export const cancelReserveHouseAction = houseId => {
    return {
        type: CANCEL_RESERVE_HOUSE,
        payload: houseId
    };
};