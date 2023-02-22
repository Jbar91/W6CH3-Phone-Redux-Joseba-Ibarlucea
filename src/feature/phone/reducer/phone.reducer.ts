import { createReducer } from "@reduxjs/toolkit";
import { Display } from "../models/phone";
import * as ac from "./phone.actions.creator";

const initialState: Display = "";

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.numberCreator, (state, { payload }) => state + payload);
  builder.addCase(ac.deleteCreator, (state) => (state = ""));
  builder.addDefaultCase((state) => state);
  return [];
});
