export const cartReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                products: action.payload
            }
        default:
            return state;
    }
};