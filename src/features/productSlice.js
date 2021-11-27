import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopApi from "commons/apis/shopApi";

export const fetchAsyncProduct = createAsyncThunk(
  "products/fetchAsyncProduct",
  async () => {
    const response = await shopApi.get("/products");
    return response.data;
  }
);
export const fetchAsyncItemProduct = createAsyncThunk(
  "products/fetchAsyncItemProduct",
  async (id) => {
    const response = await shopApi.get(`/products/${id}`);
    return response.data;
  }
);

const initialState = {
  products: [],
  listingProduct: [],
  selectedProducts: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    listingProduct(state, { payload }) {
      return { ...state, listingProduct: payload };
    },
    remmovelistingProduct(state, { payload }) {
      return { ...state, listingProduct: [] };
    },
    remmoveSelectedProduct(state, { payload }) {
      state.selectedProducts = {};
    },
  },
  extraReducers: {
    [fetchAsyncProduct.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncProduct.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, products: payload };
    },
    [fetchAsyncProduct.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncItemProduct.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, selectedProducts: payload };
    },
  },
});
export const { listingProduct, remmovelistingProduct, remmoveSelectedProduct } =
  productSlice.actions;
export const getListingProduct = (state) => state.products.listingProduct;
export const getItemProduct = (state) => state.products.selectedProducts;
export const getAllProducts = (state) => state.products.products;
export default productSlice.reducer;
