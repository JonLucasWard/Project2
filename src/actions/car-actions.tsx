import { Car } from '../models/AppModels';

export const carsTypes = {
    CARS_GET_RESOLVED: 'CARS_GET_RESOLVED',
    CARS_PAGE_REQUEST: 'CARS_PAGE_REQUEST',
    CARS_UPDATE_REQUEST: 'CARS_UPDATE_REQUEST',
    DELETE_CARS: 'DELETE_CARS',
    ENTER_NEW_CAR: 'ENTER_NEW_CAR',
    VIEW_AVAILABLE_CAR: 'VIEW_AVAILABLE_CAR'
};

export const carsGetResolved =
    (car: Car) =>
        (dispatch: any) => {
            dispatch({
                payload: { car },
                type: carsTypes.CARS_GET_RESOLVED
            });
            alert("Getting all cars");
        }

export const viewAvailableCar =
    (statusid: number) =>
        (dispatch: any) => {
            dispatch({
                payload: statusid,
                type: carsTypes.VIEW_AVAILABLE_CAR
            });
            alert("Retrieving all available cars");
        }

export const carsPageRequest =
    (page: number) =>
        (dispatch: any) => {
            dispatch({
                payload: { page },
                type: carsTypes.CARS_PAGE_REQUEST
            });
        }

export const carsUpdateRequest =
    (car: Car) =>
        (dispatch: any) => {
            dispatch({
                payload: { car },
                type: carsTypes.CARS_UPDATE_REQUEST
            });
        }

export const enterNewCar =
    (car: Car) =>
        (dispatch: any) => {
            dispatch({
                payload: { car },
                type: carsTypes.ENTER_NEW_CAR
            })
        }

export const deleteCars =
    (car: Car) =>
        (dispatch: any) => {
            dispatch({
                payload: { car },
                type: carsTypes.DELETE_CARS
            })
        }
