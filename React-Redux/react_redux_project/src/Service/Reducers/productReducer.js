import ActionTypes from "../ActionTypes/productActionType";

const initialState = {
    allProducts: [],
    cart: [],
    totalPrice: 0,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS: {
            const allProducts = [...action.payload]
            const newState = { ...state, allProducts };
            return newState;
        };

        case ActionTypes.ADD_TO_CART: {
            const existingProduct = state.cart.find((pd) => pd.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity = existingProduct.quantity + 1;
                const remainingProduct = state.cart.filter(
                    (product) => product.id !== action.payload.id
                );
                const newState = {
                    ...state,
                    cart: [...remainingProduct, existingProduct],
                    totalPrice: (state.totalPrice += action.payload.price),
                };
                return newState;
            } else {
                const product = action.payload
                product.quantity = 1;
                const newState = {
                    ...state,
                    cart: [...state.cart, product],
                    totalPrice: (state.totalPrice += product.price),
                };
                return newState;
            }
        };

        case ActionTypes.REMOVE_FROM_CART: {
            const newCart = state.cart.filter((item) => item.id !== action.payload);
            const removeProduct = state.cart.find((item) => item.id === action.payload);
            const totalPrice = parseFloat((state.totalPrice).toFixed(2)) - parseFloat((removeProduct.price).toFixed(2) * removeProduct.quantity);
            const numberPrice = parseFloat(totalPrice.toFixed(2));
            const newState = { ...state, cart: newCart, totalPrice: numberPrice };
            return newState;
        }
        default:
            return state;
    }
}