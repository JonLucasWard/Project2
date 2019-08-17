import { getAllCarsTypes} from '../actions/car-actions/get-all-cars-actions';
import { number } from 'prop-types';

const initialState = {
    carid: 0,
    brand: "",
    model: "",
    makeYear: "",
    occupancy: 4,
    transmission: "",
    mileage: 0,
    color: "",
    ac: true,
    statusid: 1,
    rate: 0,
    typeid: 0,
    loadingAllCars: false,
    allCars: {}
}

export const getAllCarsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case getAllCarsTypes.GET_ALL_CARS_SUBMIT_REQUEST:
            return {
                ...state,
                loadingAllCars: true
            }
        case getAllCarsTypes.GET_ALL_CARS_SEARCH_RESOLVED:
            return {
                ...state, 
                carid: action.payload.carid,
                brand: action.payload.brand,
                model: action.payload.model,
                makeYear: action.payload.makeYear,
                occupancy: action.payload.occupancy,
                tranismission: action.payload.transmission,
                mileage: action.payload.mileage,
                color: action.payload.color,
                ac: action.payload.ac,
                statusid: action.payload.statusid,
                rate: action.payload.rate,
                typeid: action.payload.typeid,
                loadingAllCars: true,
                allCars: []
            }
        default: break
    }
    return initialState;
}