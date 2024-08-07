import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: 0,
  totalCartItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cartItems -= action.payload;
      state.totalPrice -= action.payload;
    },
    clearCart: (state, action) => {
      state.cartItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
