import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "../../feature/phone/reducer/phone.reducer";

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
