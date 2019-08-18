import { PayInfo } from '../../models/AppModels';

export const checkoutActionsTypes = {
    CHECKOUT_RESOLVED: 'CHECKOUT_RESOLVED'
};

export const checkoutResolved = (payinfo: object) => (dispatch: any) => {
    dispatch({
        payload: {payinfo},
        type: checkoutActionsTypes
    });
}