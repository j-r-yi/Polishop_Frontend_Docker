import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart.slice';
import locationReducer from './features/location.slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    location: locationReducer,
  },
});

export default store;
