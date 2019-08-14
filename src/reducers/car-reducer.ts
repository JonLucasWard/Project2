import { IManageCarState } from '../reducers/index';
import { carsTypes } from '../actions/car-actions';
import { MockCar, MockCar2 } from '../models/dummyData';

const initialState: IManageCarState = {
    cars: [MockCar, MockCar2],
    page: 1
};

export const getAllCarsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case carsTypes.CARS_GET_RESOLVED:
            return {
                ...state,
                cars: [MockCar, MockCar2]
            }
        default: break;
    }
    return state;
}

export const getAllCarsAvailableReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case carsTypes.VIEW_AVAILABLE_CAR:
            return {
                ...state,
                cars: [MockCar, MockCar2]
            }
        default: break;
    }
    return state;
}

export const updateCarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case carsTypes.CARS_UPDATE_REQUEST:
            return {
                ...state,
                cars: [MockCar, MockCar2]
            }
        default: break;
    }
    return state;
}