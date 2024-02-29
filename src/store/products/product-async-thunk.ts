import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCT_ACTION_TYPES } from "../../utils/constants/product-constants";

const fetchProducts = createAsyncThunk(
  PRODUCT_ACTION_TYPES.PRODUCT_LIST,
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const fetchSingleProduct = createAsyncThunk(
  PRODUCT_ACTION_TYPES.SINGLE_PRODUCT,
  async (id: string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

export { fetchProducts, fetchSingleProduct };
