export const getRentalsByUserTypes = {
    GET_ALL_RENTALS_INPUT_UPDATE: 'GET_ALL_RENTALS_INPUT_UDPATE',
    GET_ALL_RENTALS_SUBMIT_REQUEST: 'GET_ALL_RENTALS_SUBMIT_REQUEST',
    GET_ALL_RENTALS_SEARCH_RESOLVED: 'GET_ALL_RENTALS_SEARCH_RESOLVED',
}

export const getRentalsByUserInputUpdate = (userid: number) => (dispatch: any) => {
    dispatch({
        payload: ( userid ),
        type: getRentalsByUserTypes.GET_ALL_RENTALS_INPUT_UPDATE
    });
}

export const getRentalsByUserSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {},
        type: getRentalsByUserTypes.GET_ALL_RENTALS_SUBMIT_REQUEST
    });
}

export const getRentalsByUserSearchResolved = (
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
            transactionid, userid, carid, daterented, expectedreturn, description, approved
        },
        type: getRentalsByUserTypes.GET_ALL_RENTALS_SEARCH_RESOLVED
    });
}