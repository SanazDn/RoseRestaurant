import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
        state.totalPrice = state.totalPrice + newItem.price;
      } else {
        existingItem.quantity++;
        //existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalPrice =  state.totalPrice  + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;  // ?????
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalPrice =  state.totalPrice  - existingItem.price;
      } else {
        existingItem.quantity--;
        state.totalPrice =  state.totalPrice - existingItem.price;
        
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;