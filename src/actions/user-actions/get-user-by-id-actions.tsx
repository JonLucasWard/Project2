export const getUserTypes = {
    GET_USER_INPUT_UPDATE: 'GET_USER_INPUT_UPDATE',
    GET_USER_SUBMIT_REQUEST: 'GET_USER_SUBMIT_REQUEST',
    GET_USER_SEARCH_RESOLVED: 'GET_USER_SEARCH_RESOLVED'
};

export const getUserInputUpdate = (inputValue: number) => (dispatch: any) => {
    dispatch({
        payload: {inputValue},
        type: getUserTypes.GET_USER_INPUT_UPDATE
    });
}

export const getUserSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {

        },
        type: getUserTypes.GET_USER_SUBMIT_REQUEST
    });
}

export const getUserSearchResolved = (
    userid: number, 
    driverlicense: string, 
    email: string, 
    firstname: string, 
    lastname: string, 
    password: string, 
    phonenumber: string, 
    role: number, 
    username: string
    
    ) =>  (dispatch: any) => 
    
    {
    dispatch({
        payload: {userid, driverlicense, email, firstname, lastname, password, phonenumber, role, username},
        type: getUserTypes.GET_USER_SEARCH_RESOLVED
    });
}