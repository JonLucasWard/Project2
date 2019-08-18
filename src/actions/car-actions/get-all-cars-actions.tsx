export const getAllCarsTypes = {
    GET_ALL_CARS_SUBMIT_REQUEST: 'GET_ALL_CARS_SUBMIT_REQUEST',
    GET_ALL_CARS_SEARCH_RESOLVED: 'GET_ALL_CARS_SEARCH_RESOLVED'
};

export const getAllCarsSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {

        },
        type: getAllCarsTypes.GET_ALL_CARS_SUBMIT_REQUEST
    });
}

export const getAllCarsSearchResolved = (
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
        type: getAllCarsTypes.GET_ALL_CARS_SEARCH_RESOLVED
    });
}
