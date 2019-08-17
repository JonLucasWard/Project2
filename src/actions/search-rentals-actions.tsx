export const searchRentalTypes = {
    INPUT_SEARCH_RENTALS_UPDATE: 'INPUT_SEARCH_RENTALS_UPDATE',
    USER_SEARCH_RENTAL_REQUEST: 'USER_SEARCH_RENTAL_REQUEST',
    SEARCH_RENTAL_RESOLVED: 'SEARCH_RENTAL_RESOLVED'
};

export const inputSearchRentalUpdate = (input: any) => (dispatch: any) => {
    dispatch({
        payload: { input },
        type: searchRentalTypes.INPUT_SEARCH_RENTALS_UPDATE
    });
}

export const userSearchRentalRequest = () => (dispatch: any) => {
    dispatch({
        payload: {},
        type: searchRentalTypes.INPUT_SEARCH_RENTALS_UPDATE
    });
}

export const searchRentalResolved = 
(
    carid: number,
    brand: string,
    model: string, 
    makeYear: string,
    occupancy: number,
    transmission: string,
    mileage: number,
    color: string,
    ac: boolean,
    statusid: number,
    rate: number,
    typeid: number
) => (dispatch: any) => {
    dispatch({
        payload: {
            carid,
            brand,
            model,
            makeYear,
            occupancy,
            transmission,
            mileage,
            color,
            ac,
            statusid,
            rate,
            typeid
        },

        type: searchRentalTypes.SEARCH_RENTAL_RESOLVED
    });
}