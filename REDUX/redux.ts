// State

import { $CombinedState, combineReducers, createStore } from 'redux'
import { actionInterFace, initialCartInterFace, initialStateInterFace, productInterFace } from './interface';
import { CartConst, ProductConst } from './const';


//  Product STATE*****
const initialState:initialStateInterFace = {
    products: [{name: "Laptop", price: 2500, id: 2942}],
    numberOfProducts: 0,
};

// CART STATE **********
const initialCartStarte:initialCartInterFace= {
    cart:[],
    numberOfProducts: 0,
}


// PRODUCT ACTION ********
const getProductsAction = ():actionInterFace => {
    return {
        type: ProductConst.GET_PRODUCT,
    };
};
const addProductsAction = (product:productInterFace):actionInterFace => {
    return {
        type: ProductConst.ADD_PRODUCT,
        payload: product,
    };
};

// CART ACTION *******
const getCartAction = ():actionInterFace => {
    return {
        type: CartConst.GET_CART_ITEMS,
    };
};
const addCartAction = (product:productInterFace):actionInterFace => {
    return {
        type: CartConst.ADD_CART_ITEMS,
        payload: product,
    };
};


// PRODUCT REDUCER************
const productReducer = (state:initialStateInterFace = initialState, action:actionInterFace) => {
        switch (action.type) {
            case ProductConst.GET_PRODUCT:{
                const newState = {
                    ...state,
                };
                return newState;
            };
    
            case ProductConst.ADD_PRODUCT: {
                const products = [...state.products, action.payload];
                const numberOfProducts =  state.numberOfProducts + 1;
                const newState:initialStateInterFace = {
                   products,
                   numberOfProducts,
                };
                return newState;
            };
        
            default:
                return state;
        };
};

// CART REDUCER ***********
const cartReducer = (state:initialCartInterFace = initialCartStarte, action:actionInterFace) => {
    switch (action.type) {
        case CartConst.GET_CART_ITEMS:{
            const newState = {...state,};
            return newState;
        };

        case CartConst.ADD_CART_ITEMS: {
            const cart = [...state.cart, action.payload];
            const numberOfProducts = state.numberOfProducts + 1;
            const newState:initialCartInterFace = {cart, numberOfProducts};
            return newState;
        };
        default:
            return state;
    }
};


// Combine All Reducer
const rootReducer = combineReducers({productR: productReducer, cartR: cartReducer,});

const store = createStore(rootReducer);
store.subscribe(() => {
  let allState = {
    products: store.getState().productR,
    cart: store.getState().cartR,
  };
  console.log(allState);
});


store.dispatch(getProductsAction())
store.dispatch(addProductsAction({name: "Book", price: 200, id: 224}));
store.dispatch(addProductsAction({name: "WRITE", price: 250, id: 224}));
store.dispatch(addProductsAction({name: "Pancile", price: 12, id: 345}));
store.dispatch(addProductsAction({name: "Mobile", price: 1200, id: 1045}));
store.dispatch(addCartAction({name:"Book", price: 120, id: 2222}))
store.dispatch(getCartAction())