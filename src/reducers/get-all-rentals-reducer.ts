import { getAllRentalTypes } from '../actions/rental-actions/get-all-rentals-actions';
import { number } from 'prop-types';

const initialState = {
    transactionid: 0,
    userid: 0,
    carid: 0,
    daterented: "",
    expectedreturn: "",
    approved: true,
    loadingAllRentals: false,
    rentals: {}
}

export const getAllRentalsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case getAllRentalTypes.GET_ALL_RENTALS_SUBMIT_REQUEST:
            return {
                ...state,
                loadingAllRentals: true
            }
        case getAllRentalTypes.GET_ALL_RENTALS_SEARCH_RESOLVED:
            return {
                ...state,
                transactionid: action.payload.data,
                userid: action.payload.userid,
                carid: action.payload.carid,
                datedrented: action.payload.daterented,
                expectedreturn: action.payload.expectedreturn,
                approved: action.payload.approved,
                rentals: []
            }
        default: break;
    }
    return initialState;
}