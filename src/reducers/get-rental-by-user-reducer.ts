import { getRentalsByUserTypes} from '../actions/rental-actions/get-rentals-by-user-actions';

const initialState = {
    transactionid: 0,
    userid: 0,
    carid: 0,
    daterented: "",
    expectedreturn: "",
    approved: true,
    inputValue: 1,
    loadingRentalByUser: true
}

export const getRentalByUserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case getRentalsByUserTypes.GET_ALL_RENTALS_INPUT_UPDATE:
            return {
                ...state,
                inputValue: action.payload.inputValue
            }
        case getRentalsByUserTypes.GET_ALL_RENTALS_SUBMIT_REQUEST:
            return {
                ...state,
                loadingRentalByUser: true
            }
        case getRentalsByUserTypes.GET_ALL_RENTALS_SEARCH_RESOLVED:
            return {
                ...state,
                transactionid: action.payload.userid,
                userid: action.payload.inputValue,
                carid: action.payload.carid,
                daterented: action.payload.daterented,
                expectedreturn: action.payload.expectedreturn,
                description: action.payload.description,
                approved: action.payload.boolean
            }
        default: break;
    }
    return initialState;
}
