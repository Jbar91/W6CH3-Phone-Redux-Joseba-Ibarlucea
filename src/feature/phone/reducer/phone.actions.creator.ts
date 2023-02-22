import { createAction } from "@reduxjs/toolkit";
import { Display } from "../models/phone";
import { phoneActions } from "./phone.actions.types";

export const numberCreator = createAction<Display>(phoneActions.clickNumber);

export const deleteCreator = createAction(phoneActions.deleteNumber);

export const callCreator = createAction<boolean>(phoneActions.call);

export const hangCreator = createAction<boolean>(phoneActions.hang);
