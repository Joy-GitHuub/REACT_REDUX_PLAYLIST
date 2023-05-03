import ActionTypes from "../ActionTypes/productActionType";

const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    };
};

const removeFormCart = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: productId,
    };
};

export { setProducts, addToCart, removeFormCart };