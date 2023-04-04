import { configureStore } from "@reduxjs/toolkit";
import serviceShowImagesReducer from "../slices/ShowImages";

const store = configureStore({
  reducer: {
    serviceShowImages: serviceShowImagesReducer,
  },
});

export default store;
