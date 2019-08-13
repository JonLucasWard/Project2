// import {Rental} from '../models/App-models'

export const searchTypes = {
    SEARCH_UPDATE: 'SEARCH_UPDATE'
};


// Define what the action is composed of
// Action has a type and a payload.  The type defines the kind of action
// that has taken place, and is used by reducers to indicate how they should
// react to the action.  The payload holds data that the reducers may need
// to do their job.

// What is this? What is happening here?????
/*
updateClicks is an Action Creator! It creates actions and dispatches
those actions when called. This is the function our component will be able
to use to call an action.
*/
export const getRental = () => (dispatch: any) => {
    console.log('You are in the actions!');
    dispatch({
        payload: {},
        type: searchTypes.SEARCH_UPDATE
    });
}