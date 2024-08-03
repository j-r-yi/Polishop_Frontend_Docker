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
      state.cartItems += action.payload;
    },
    removeFromCart: (state, action) => {},
    clearCart: (state, action) => {
      state.cartItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
