import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(item => item.id === action.payload.id)
            !product && state.products.push(action.payload)
        },
        removeFromCart: (state, action) => {
            console.log(action.payload);
            const updatedProducts = state.products.filter(item => item.id !== action.payload.id);
            state.products = updatedProducts;
        },
        reset: (state) => {
            state.products = []
        }
    }
})

export const { reset, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
