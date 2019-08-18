import { number } from "prop-types";

export const getAllRentalTypes = {
    GET_ALL_RENTALS_SUBMIT_REQUEST: 'GET_ALL_RENTALS_SUBIT_REQUEST',
    GET_ALL_RENTALS_SEARCH_RESOLVED: 'GET_ALL_RENTALS_SEARCH_RESOLVED'
}

export const getAllRentalsSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {},
        type: getAllRentalTypes.GET_ALL_RENTALS_SUBMIT_REQUEST
    });
}

export const getAllRentalsSearchResolved = (
    transactionid: number,
    userid: number,
    carid: number,
    daterented: string,
    expectedreturn: string,
    description: string,
    approved: boolean   
) => (dispatch: any) => {
    dispatch({
        payload: {
            transactionid,
            userid,
            carid,
            daterented,
            expectedreturn,
            description,
            approved
        },
        type: getAllRentalTypes.GET_ALL_RENTALS_SEARCH_RESOLVED
    });
}