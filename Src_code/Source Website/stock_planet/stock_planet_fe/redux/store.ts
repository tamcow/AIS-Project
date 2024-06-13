import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import exampleSlide from "./exampleSlice";
import authSlice from "./authSlice";
import stockSlice from "./stockSlice";
export const store = configureStore({
	reducer: {
		example: exampleSlide,
		auth: authSlice,
		stock: stockSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
