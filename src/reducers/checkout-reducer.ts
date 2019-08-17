import { CheckoutState } from '../reducers/index';
import { checkoutActionsTypes} from '../actions/checkout-actions/checkout-actions';
import { MockPayInfo } from '../models/dummyData';

const initialState: CheckoutState = {
    payinfo: [MockPayInfo]
};

export const checkoutReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case checkoutActionsTypes.CHECKOUT_RESOLVED:
            return {
                ...state,
                payinfo: [MockPayInfo]
            }
        default: break;
    }
    return state;
}
