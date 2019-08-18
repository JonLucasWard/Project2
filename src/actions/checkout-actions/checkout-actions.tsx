import { PayInfo } from '../../models/AppModels';

export const checkoutActionsTypes = {
    CHECKOUT_RESOLVED: 'CHECKOUT_RESOLVED'
};

export const checkoutResolved = (Payinfo: PayInfo) => (dispatch: any) => {
    dispatch({
        payload: { Payinfo },
        type: checkoutActionsTypes
    });
}