import { getAvailableCarsTypes } from '../actions/car-actions/get-available-cars-action';
import { number } from 'prop-types';

const initialState = {
    carid: 0,
    brand: "",
    model: "",
    makeYear: "",
    occupancy: 4,
    transmission: "automatic",
    mileage: 0,
    color: "",
    ac: true,
    statusid: 0,
    rate: 0,
    typeid: 1,
    inputValue: 0,
    loadingAllAvailableCars: false,
    availableCars: {}
}

export const getAllAvailableCarsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case getAvailableCarsTypes.GET_AVAILABLE_CARS_INPUT_UPDATE:
            return {
                ...state,
                inputValue: action.paylaod.inputValue
            }
        case getAvailableCarsTypes.GET_AVAILABLE_CARS_SUBMIT_REQUEST:
            return {
                ...state,
                loadingAllAvailableCars: true
            }
        case getAvailableCarsTypes.GET_AVAILABLE_CARS_SEARCH_RESOLVED:
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
                statusid: action.payload.inputValue,
                rate: action.payload.rate,
                typeid: action.payload.typeid,
                loadingAllAvailableCars: true,
                availableCars: []
            }
        default: break;
    }
    return initialState;
}