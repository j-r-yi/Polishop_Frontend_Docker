import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  currentUserId: null,
  currentUsername: null,
  currentUserEmail: null,
  currentUserCart: null,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    logIn: (state, action) => {
      try {
        console.log('This step is executed');
        localStorage.clear();
        state.isLoggedIn = true;
        state.currentUsername = action.payload.username;
        state.currentUserEmail = action.payload.email;
        state.currentUserCart = action.payload.cart;
        localStorage.setItem('cartItems', state.currentUserCart);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { logIn } = accountSlice.actions;
export default accountSlice.reducer;
