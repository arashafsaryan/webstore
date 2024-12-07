import { createSlice } from "@reduxjs/toolkit";

// بازیابی داده‌های سبد خرید از LocalStorage
const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const savedTotalQuantity =
  JSON.parse(localStorage.getItem("totalQuantity")) || 0;
const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;

const initialState = {
  cartItems: savedCartItems,
  totalQuantity: savedTotalQuantity,
  totalPrice: savedTotalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;

      // ذخیره در LocalStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    increase: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += product.price;

        // ذخیره در LocalStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
    decrease: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= product.price;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalQuantity -= 1;
          state.totalPrice -= product.price;
        }

        // ذخیره در LocalStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
    removeFromCart: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalQuantity -= product.quantity;
        state.totalPrice -= product.price * product.quantity;

        // ذخیره در LocalStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
  },
});

export const { addToCart, increase, decrease, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
