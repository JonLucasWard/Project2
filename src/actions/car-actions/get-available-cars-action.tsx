export const getAvailableCarsTypes = {
    GET_AVAILABLE_CARS_INPUT_UPDATE: 'GET_AVAILABLE_CARS_INPUT_UPDATE',
    GET_AVAILABLE_CARS_SUBMIT_REQUEST: 'GET_AVAILABLE_CARS_SUBMIT_REQUEST',
    GET_AVAILABLE_CARS_SEARCH_RESOLVED: 'GET_AVAILABLE_CARS_SEARCH_RESOLVED'
};

export const getAvailableCarsInputUpdate = (inputUpdate: number) => (dispatch: any) => {
    dispatch({
        payload: {
            inputUpdate
        },
        type: getAvailableCarsTypes.GET_AVAILABLE_CARS_INPUT_UPDATE
    });
}

export const getAvailableCarsSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {},
        type: getAvailableCarsTypes.GET_AVAILABLE_CARS_SUBMIT_REQUEST
    });
}

export const getAvailableCarsSearchResolved = (
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
        payload: { carid, brand, model, makeYear, occupancy, transmission, mileage, color, ac, statusid, rate, typeid },
        type: getAvailableCarsTypes.GET_AVAILABLE_CARS_SEARCH_RESOLVED
    })
}