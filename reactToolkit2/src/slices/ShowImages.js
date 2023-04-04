import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const serviceShowImagesSlice = createSlice({
  name: "serviceShowImages",
  initialState,
  reducers: {
    showImages: (state, action) => {
      const url = action.payload;

      return [{ id: Math.random(), url }, ...state];
    },
  },
});

export const { showImages } = serviceShowImagesSlice.actions;
export default serviceShowImagesSlice.reducer;
