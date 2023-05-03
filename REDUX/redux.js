"use strict";
// State
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var redux_1 = require("redux");
var const_1 = require("./const");
//  Product STATE*****
var initialState = {
    products: [{ name: "Laptop", price: 2500, id: 2942 }],
    numberOfProducts: 0
};
// CART STATE **********
var initialCartStarte = {
    cart: [],
    numberOfProducts: 0
};
// PRODUCT ACTION ********
var getProductsAction = function () {
    return {
        type: const_1.ProductConst.GET_PRODUCT
    };
};
var addProductsAction = function (product) {
    return {
        type: const_1.ProductConst.ADD_PRODUCT,
        payload: product
    };
};
// CART ACTION *******
var getCartAction = function () {
    return {
        type: const_1.CartConst.GET_CART_ITEMS
    };
};
var addCartAction = function (product) {
    return {
        type: const_1.CartConst.ADD_CART_ITEMS,
        payload: product
    };
};
// PRODUCT REDUCER************
var productReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case const_1.ProductConst.GET_PRODUCT:
            {
                var newState = __assign({}, state);
                return newState;
            }
            ;
        case const_1.ProductConst.ADD_PRODUCT:
            {
                var products = __spreadArray(__spreadArray([], state.products, true), [action.payload], false);
                var numberOfProducts = state.numberOfProducts + 1;
                var newState = {
                    products: products,
                    numberOfProducts: numberOfProducts
                };
                return newState;
            }
            ;
        default:
            return state;
    }
    ;
};
// CART REDUCER ***********
var cartReducer = function (state, action) {
    if (state === void 0) { state = initialCartStarte; }
    switch (action.type) {
        case const_1.CartConst.GET_CART_ITEMS:
            {
                var newState = __assign({}, state);
                return newState;
            }
            ;
        case const_1.CartConst.ADD_CART_ITEMS:
            {
                var cart = __spreadArray(__spreadArray([], state.cart, true), [action.payload], false);
                var numberOfProducts = state.numberOfProducts + 1;
                var newState = { cart: cart, numberOfProducts: numberOfProducts };
                return newState;
            }
            ;
        default:
            return state;
    }
};
// Combine All Reducer
var rootReducer = (0, redux_1.combineReducers)({ productR: productReducer, cartR: cartReducer });
var store = (0, redux_1.createStore)(rootReducer);
store.subscribe(function () {
    var allState = {
        products: store.getState().productR,
        cart: store.getState().cartR
    };
    console.log(allState);
});
store.dispatch(getProductsAction());
store.dispatch(addProductsAction({ name: "Book", price: 200, id: 224 }));
store.dispatch(addProductsAction({ name: "WRITE", price: 250, id: 224 }));
store.dispatch(addProductsAction({ name: "Pancile", price: 12, id: 345 }));
store.dispatch(addProductsAction({ name: "Mobile", price: 1200, id: 1045 }));
store.dispatch(addCartAction({ name: "Book", price: 120, id: 2222 }));
store.dispatch(getCartAction());
