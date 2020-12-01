import { SET_PAYMENT } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAYMENT:
            const paymentLink = action.payload;
            return paymentLink;

        default:
            return state;
    }
};

export default reducer;
