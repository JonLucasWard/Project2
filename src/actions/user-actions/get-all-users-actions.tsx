export const getAllUsersTypes = {
    GET_ALL_USERS_SUBMIT_REQUEST: 'GET_ALL_USERS_SUBMIT_REQUEST',
    GET_ALL_USERS_SEARCH_RESOLVED: 'GET_ALL_USERS_SEARCH_RESOLVED'
};


export const getAllUsersSubmitRequest = () => (dispatch: any) => {
    dispatch({
        payload: {

        },
        type: getAllUsersTypes.GET_ALL_USERS_SUBMIT_REQUEST
    });
}

export const getAllUsersSearchResolved =
    (
        userid: number,
        driverlicense: string,
        email: string,
        firstname: string,
        lastname: string,
        password: string,
        phonenumber: string,
        role: number,
        username: string
    ) => (dispatch: any) => {
        dispatch({
            payload: {
                userid,
                driverlicense,
                email,
                firstname,
                lastname,
                password,
                phonenumber,
                role,
                username
            },
            type: getAllUsersTypes.GET_ALL_USERS_SEARCH_RESOLVED
        });
    }
