import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: 51.505,
  longitude: -0.09,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;
