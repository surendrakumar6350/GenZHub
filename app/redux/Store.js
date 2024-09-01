import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import userSlice from "./allSlice"
import AlluserSlice from "./allUser"

export const Store = configureStore({
  reducer: {
    Slice: Slice,
    userSlice: userSlice,
    AlluserSlice: AlluserSlice,
  },
});
