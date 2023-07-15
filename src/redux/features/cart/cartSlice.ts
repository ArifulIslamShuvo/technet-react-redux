import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { isExists } from 'date-fns';

interface ICard {
  products: IProduct[];
}
const initialState: ICard = {
  products: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (products) => products._id === action.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity! + 1;
        // existing.quantity! +=1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (products) => products._id === action.payload._id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      }
      // else {
      //   state.products.push({ ...action.payload, quantity: 1 });
      // }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
