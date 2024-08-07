import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cart.slice';
import locationReducer from './slices/location.slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    location: locationReducer,
  },
});

export default store;
