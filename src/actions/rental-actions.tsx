import { Rental } from '../models/AppModels';

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
            alert("Getting All Transactions")
        }

export const rentalsGetResolvedByUser = 
        (id: number) => 
            (dispatch: any) => {
                dispatch({
                    payload: id,
                    type: rentalTypes.RENTALS_GET_RESOLVED_BY_USER
                });
                alert("Getting Transactions by User IDs")
            }
export const rentalsUpdateRequest = 
            (rental: Rental) =>
                (dispatch: any) => {
                    dispatch({
                        payload: { rental },
                        type: rentalTypes.RENTALS_UPDATE_REQUEST
                    });
                    alert("Updating Transaction Information")
                }