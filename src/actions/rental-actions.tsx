import { Rental } from '../models/App-models';

export const rentalTypes = {
    RENTALS_GET_RESOLVED: 'RENTALS_GET_RESOLVED',
    RENTALS_GET_RESOLVED_BY_USER: 'RENTALS_GET_RESOLVED_BY_USER',
    RENTALS_UPDATE_REQUEST: 'RENTALS_UPDATE_REQUEST'
};

export const rentalsGetResolved =
    (rental: Rental) =>
        (dispatch: any) => {
            dispatch({
                payload: { rental },
                type: rentalTypes.RENTALS_GET_RESOLVED
            });
        }

export const rentalsGetResolvedByUser =
    (userid: number) =>
        (dispatch: any) => {
            dispatch({
                payload: userid,
                type: rentalTypes.RENTALS_GET_RESOLVED_BY_USER
            });
        }
export const rentalsUpdateRequest =
    (rental: Rental) =>
        (dispatch: any) => {
            dispatch({
                payload: { rental },
                type: rentalTypes.RENTALS_UPDATE_REQUEST
            });
        }