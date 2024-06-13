import { Stock } from "@/models/stock";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StockState {
	stocks: Stock[];
}

const initialState: StockState = {
	stocks: [],
};

export const stockSlice = createSlice({
	name: "stock",
	initialState,
	reducers: {
		setStocks: (state, actions: PayloadAction<Stock[]>) => {
			state.stocks = actions.payload;
		},
	},
});

export const {setStocks} = stockSlice.actions;
export default stockSlice.reducer;
