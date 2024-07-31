import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

const getCartItems = function () {
  const allEntries = Object.entries(localStorage);
  return allEntries;
};
