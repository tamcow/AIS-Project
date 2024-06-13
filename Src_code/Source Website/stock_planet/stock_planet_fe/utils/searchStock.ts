import { Stock } from "@/models/stock";
import removeVietnameseTones from "./removeVietnameseTones";

export default function searchStocks(stocks: Stock[], searchTerm: string) {
	if (searchTerm === "") {
		return stocks;
	}

	const normalizedSearchTerm = removeVietnameseTones(searchTerm.toLowerCase());

	return stocks.filter((stock) => {
		const symbol = removeVietnameseTones(stock.symbol.toLowerCase());
		return symbol.includes(normalizedSearchTerm);
	});
}
