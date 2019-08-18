import { IManageRentalState } from '../reducers/index';
import { rentalTypes } from '../actions/rental-actions';
import { MockRental, MockRental2 } from '../models/dummyData';
import { bindActionCreators } from 'redux';

const initialState: IManageRentalState = {
    rentals: [MockRental, MockRental2],
    page: 1
};

export const rentalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case rentalTypes.RENTALS_GET_RESOLVED:
            return {
                ...state,
                rentals: [MockRental, MockRental2]
            }
        case rentalTypes.RENTALS_GET_RESOLVED_BY_USER:
            return {
                ...state,
                rentals: [MockRental.id]
            }
        case rentalTypes.RENTALS_UPDATE_REQUEST:
            return {
                ...state,
                rentals: action.payload.rental
            }
        default: break;
    }
    return state;
}
