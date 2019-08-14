import { IManageRentalState } from '../reducers/index';
import { rentalTypes } from '../actions/rental-actions';
import { MockRental, MockRental2 } from '../models/dummyData';

const initialState: IManageRentalState = {
    rentals: [MockRental, MockRental2],
    page: 1
};

export const getAllRentalsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case rentalTypes.RENTALS_GET_RESOLVED:
            return {
                ...state,
                rentals: [MockRental, MockRental2]
            }
        default: break;
    }
    return state;
}

export const getAllRentalsByUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case rentalTypes.RENTALS_GET_RESOLVED_BY_USER:
            return {
                ...state,
                rentals: [MockRental, MockRental2]
            }
        default: break;
    }
    return state;
}

export const updateRentalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case rentalTypes.RENTALS_UPDATE_REQUEST:
            return {
                ...state,
                rentals: [MockRental, MockRental2]
            }
        default: break;
    }
    return state;
}