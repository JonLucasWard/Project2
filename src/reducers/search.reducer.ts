import {MockRental, MockRental2} from "../models/AppModels"
import { searchTypes } from "../actions/search.action";
import {ISearchState} from "../reducers/index";

// Defining initial state of clicker
const initialState: ISearchState = {
    page: 1,
    rentals: [MockRental]
};

// Define the reducer for the clicker
// The reducer will determine which action has taken place
// and if it needs to, it will return a new state if the action
// requires it. If not, we will return the current state.
// Usually, we will switch on an action, and capture the various actions
// that we need to handle
export const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case searchTypes.SEARCH_UPDATE:
            return {
                ...state,
                rentals: [MockRental, MockRental2],
                page: 1

            }
        default: break;
    }
    return state;
}
