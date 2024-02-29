import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../constants/redux-constants";
import { fetchProducts, fetchSingleProduct } from "./product-async-thunk";
import { ProductState } from "../../models/product";

const initialState: ProductState = {
  products: [],
  singleProduct: [],
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: SliceNames.PRODUCT,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
