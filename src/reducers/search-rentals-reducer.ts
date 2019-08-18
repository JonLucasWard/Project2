import { SearchRentalState } from '../reducers/index';
import { searchRentalTypes } from '../actions/search-rentals-actions';

const initialState = {
    carid: 0,
    brand: "",
    model: "",
    makeYear: "",
    occupancy: 4,
    transmission: true,
    mileage: 0,
    color: "",
    ac: true,
    statusid: 1,
    rate: 0,
    typeid: 1
}

export const searchCarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case searchRentalTypes.INPUT_SEARCH_RENTALS_UPDATE:
            return {
                ...state
            }
        case searchRentalTypes.USER_SEARCH_RENTAL_REQUEST:
            return {
                ...state
            }
        case searchRentalTypes.SEARCH_RENTAL_RESOLVED:
            return {
                ...state,
                carid: action.payload.carid,
                brand: action.payload.brand,
                model: action.payload.model,
                makeYear: action.payload.makeYear,
                occupancy: action.payload.occupancy,
                transmission: action.payload.transmission,
                mileage: action.payload.mileage,
                color: action.payload.color,
                ac: action.payload.ac,
                statusid: action.payload.statusid,
                rate: action.payload.rate,
                typeid: action.payload.typeid
            }
        default: break;
    }
    return initialState;
}