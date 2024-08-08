import { createSlice } from '@reduxjs/toolkit';
import { get } from 'http';

// Returns an array of product objects
const getCurrentCartItems = function () {
  // Check if user browser supports local storage
  if (typeof Storage !== 'undefined') {
    // const cartItems = localStorage.getItem('cartItems');
    if (localStorage.getItem('cartItems') == null) {
      return [];
    }
    const parsedItems = JSON.parse(localStorage.getItem('cartItems'));
    return parsedItems;
  } else {
    return [];
  }
};
const initialItems = getCurrentCartItems();
//
//
//
const updateCartStorage = function (updatedCart) {
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};
//
//
//
const getCartItemCount = function () {
  return initialItems.reduce((accum, currItem) => {
    return accum + currItem.quantity;
  }, 0);
};

const getCartCost = function () {
  const cost = initialItems.reduce((accum, currItem) => {
    return accum + currItem.price * currItem.quantity;
  }, 0);
  return cost;
};

const initialState = {
  cartItems: initialItems,
  cartItemCount: getCartItemCount(),
  totalPrice: getCartCost(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const tempId = action.payload.productId;
      state.totalPrice += action.payload.price;
      state.cartItemCount += 1;

      const existingItem = state.cartItems.find((curr) => {
        return curr.productId === tempId;
      });

      // If item in cart increment quantity and update localstorage
      if (existingItem) {
        existingItem.quantity += 1;
      }
      // If item not in cart add to cartItems and update localstorage
      else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      updateCartStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItemCount -= action.payload;
      state.totalPrice -= action.payload;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      state.cartItemCount = 0;
      state.totalPrice = 0;
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
