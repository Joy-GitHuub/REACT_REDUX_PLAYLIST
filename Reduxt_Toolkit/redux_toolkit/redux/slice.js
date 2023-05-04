import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        allProducts: [],
        cart: [],
        totalPrice: 0,
    },

    reducers: {
        setProducts: (state, action) => {
            state.allProducts = [...action.payload];
        },

        setCart: (state, action) => {
            const existItem = state.cart.find((product) => product.id === action.payload.id);
            if (existItem) {
                existItem.quantity = existItem.quantity + 1;
                const remainingItems = state.cart.filter((product) => product.id !== action.payload.id);
                state.cart = [...remainingItems, existItem];
                state.totalPrice = state.totalPrice += action.payload.price;
            }
            else {
                const newObject = { ...action.payload, quantity: 1 };
                state.cart = [...state.cart, newObject];
                state.totalPrice = state.totalPrice += action.payload.price;
            }
        },

        removeToCart: (state, action) => {
            const newCart = state.cart.filter((product) => product.id !== action.payload);
            const removeProduct = state.cart.find((item) => item.id === action.payload);
            const newPrice = parseFloat((state.totalPrice).toFixed(2)) - parseFloat((removeProduct.price).toFixed(2) * removeProduct.quantity);
            state.totalPrice = newPrice;
            state.cart = [...newCart];
        },
    },
});

export const { setProducts, setCart, removeToCart } = shopSlice.actions;

export default shopSlice.reducer;