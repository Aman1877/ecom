import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../constants/redux-constants";
import { CartState } from "../../models/cart";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: SliceNames.CART,
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { add } = cartSlice.actions;
