import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex];
        existingProduct.quantity += action.payload.quantity;
        existingProduct.price += action.payload.price * action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
      state.quantity = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.quantity -= product.quantity;
        state.total -= product.price * product.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    updateProduct: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === id);

      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.products[productIndex] = { ...product, quantity };
        state.total = state.products.reduce(
          (total, p) => total + p.price * p.quantity,
          0
        );
        state.quantity = state.products.reduce(
          (total, p) => total + p.quantity,
          0
        );
      }
    },
  },
});

export const { addProduct, clearCart, removeProduct, updateProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
