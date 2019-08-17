import { any } from "prop-types";

export const searchCarTypes = {
    SEARCH_CAR_INPUT_UPDATE: 'SEARCH_CAR_INPUT_UPDATE',
    SEARCH_CAR_SUBMIT_REQUEST: 'SEARCH_CAR_SUBMIT_REQUEST',
    SEARCH_CAR_SEARCH_RESOLVED: 'SEARCH_CAR_SEARCH_RESOLVED'
}

export const searchCarInputUpdate = 
    (inputValue: any) => (dispatch: any) => {
        dispatch({
            payload: { inputValue },
            type: searchCarTypes.SEARCH_CAR_INPUT_UPDATE
        });
    }
