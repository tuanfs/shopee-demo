import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shopApi from "commons/apis/shopApi";

export const fetchAsyncCart = createAsyncThunk(
  "cart/fetchAsyncCart",
  async () => {
    const response = await shopApi.get("/cart");
    return response.data;
  }
);
export const addAsyncCart = createAsyncThunk(
  "cart/addAsyncCart",
  async (value) => {
    const response = await shopApi.post("/cart", value);
    console.log(response.status);
    return response.status;
  }
);
export const deleteAsyncCart = createAsyncThunk(
  "cart/deleteAsyncCart",
  async (id) => {
    const response = await shopApi.delete(`/cart/${id}`);
    return response.status;
  }
);
const initialState = {
  cart: [],
  status: "",
  statusAdd: "",
  cartByUser: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "";
    },
    getCartByUser: (state, { payload }) => {
      const cart = payload.cart;
      const cartNew = [...cart];
      const result = cartNew.filter((cart) => cart.user === payload.email);
      return { state, cartByUser: result };
    },
    removeCartByUser: (state) => {
      state.cartByUser = [];
    },
    removeStatusAdd: (state) => {
      state.statusAdd = "";
    },
  },
  extraReducers: {
    [fetchAsyncCart.pending]: () => {
      console.log("Pendding");
    },
    [fetchAsyncCart.fulfilled]: (state, { payload }) => {
      console.log("Pending fulfillment");
      return { ...state, cart: payload };
    },
    [fetchAsyncCart.rejected]: () => {
      console.log("Rejected");
    },
    [addAsyncCart.fulfilled]: (state, { payload }) => {
      console.log("Added fulfillment");
      return { ...state, statusAdd: payload };
    },
    [addAsyncCart.rejected]: () => {
      console.log("Added rejected");
    },
    [deleteAsyncCart.fulfilled]: (state, { payload }) => {
      console.log("Delete fulfillment");
      return { ...state, status: payload };
    },
    [deleteAsyncCart.rejected]: () => {
      console.log("Delete fulfillment");
    },
  },
});
export const { resetStatus, getCartByUser, removeCartByUser, removeStatusAdd } =
  cartSlice.actions;
export const getAllCart = (state) => state.cart.cart;
export const getStatusAdd = (state) => state.cart.statusAdd;
export const getAllCartByUser = (state) => state.cart.cartByUser;
export const getStatusCart = (state) => state.cart.status;
export default cartSlice.reducer;
