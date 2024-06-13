import { MainLayout } from "@/components/layouts/MainLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import getYesterdaysDate from "@/utils/getYesterday";
import { Stock } from "@/models/stock";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { setStocks } from "@/redux/stockSlice";
import searchStocks from "@/utils/searchStock";
import { useRouter } from "next/router";

const Market = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { stocks } = useAppSelector((state: RootState) => state.stock);
	const [listStock, setListStock] = useState<Stock[]>([]);
	const [isLoading, setLoading] = useState<boolean>(false);
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [searchParams, setSearchParams] = useState<string>("");
	const getStocks = async (selectedDate?: string) => {
		try {
			setLoading(true);
			if (typeof window !== "undefined") {
				const res = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}api/stock${
						selectedDate ? `?selectedDate=${selectedDate}` : ""
					}`
				);
				console.log("res.data", res.data);
				console.log("res", res);
				if (res.status === 200) {
					dispatch(setStocks(res.data));
				}
			}
			setLoading(false);
		} catch (error) {
			console.log("error", error);
		}
	};
	const searchStock = async () => {
		setLoading(true);
		const stockSearched = searchStocks(listStock, searchParams);
		setListStock(stockSearched);
		setLoading(false);
	};
	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
			searchStock();
		}
	};
	useEffect(() => {
		setListStock(stocks);
	}, [stocks]);
	useEffect(() => {
		getStocks(selectedDate);
	}, [selectedDate]);
	useEffect(() => {
		setSelectedDate(getYesterdaysDate());
		getStocks();
	}, []);
	return (
		<div className="bg-[#e6e9f2] min-h-[55vh] h-min p-[5%]">
			<div className="bg-white w-full h-min flex flex-col py-[50px]">
				<div className="flex flex-row justify-between items-center px-[90px]">
					<div className="text-[36px] font-semibold text-black">
						Market Stocks
					</div>
					<div className="w-[40%] h-[35px] border-[1px] border-[#c2c2c2] border-solid rounded-[3px] flex flex-row justify-start items-center">
						<img
							src="/assets/images/search_icon.svg"
							alt=""
							className="h-[30px] w-[30px]"
						/>
						<input
							type="text"
							placeholder="Search Stock Name"
							className="placeholder:text-[#989CAB] placeholder-text-[14px] w-[85%] focus:outline-none"
							value={searchParams}
							onChange={(e) => setSearchParams(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</div>
				</div>
				<div className="px-[90px] h-min flex justify-start mt-[60px]">
					<div className="flex flex-row">
						<input
							type="date"
							min="1980-01-01"
							value={selectedDate}
							onChange={(e) => setSelectedDate(e.target.value)}
							max={getYesterdaysDate()}
							className="text-center bg-gray-200 text-base font-semibold hover:cursor-pointer rounded-lg px-[10px]"
						/>
						<button className="bg-[#5367FE] rounded-lg justify-center items-center inline-flex px-[15px] py-[8px] ml-[40px]">
							<div className="text-center text-gray-200 text-base font-semibold flex flex-row items-center">
								<div className="mx-[3px]">Category</div>
								<img
									src="/assets/images/dropdown_icon.svg"
									alt=""
									className="mx-[3px]"
								/>
							</div>
						</button>
						<button className="bg-[#e8e4e4] rounded-lg justify-center items-center inline-flex px-[15px] mx-[40px] py-[8px]">
							<div className="text-center text-[#777A85] text-base font-semibold flex flex-row items-center">
								<div className="mx-[3px]">Industry</div>
								<img
									src="/assets/images/dropdown_icon_gray.svg"
									alt=""
									className="mx-[3px]"
								/>
							</div>
						</button>
						<button className="bg-[#e8e4e4] rounded-lg justify-center items-center inline-flex px-[15px] py-[8px]">
							<div className="text-center text-[#777A85] text-base font-semibold flex flex-row items-center">
								<div className="mx-[3px]">Industry</div>
								<img
									src="/assets/images/dropdown_icon_gray.svg"
									alt=""
									className="mx-[3px]"
								/>
							</div>
						</button>
					</div>
				</div>
				<div className="flex flex-row mt-[40px] border-y-[1px] border-solid border-[#777A85] text-[16px] font-semibold bg-slate-400">
					<div className="w-[25%] h-[80px] flex justify-start items-center pl-[40px]">
						Stock Name
					</div>
					<div className="w-[15%] h-[80px] flex justify-start items-center">
						Close
					</div>
					<div className="w-[15%] h-[80px] flex justify-start items-center">
						Open
					</div>
					<div className="w-[15%] h-[80px] flex justify-start items-center">
						High
					</div>
					<div className="w-[15%] h-[80px] flex justify-start items-center">
						Low
					</div>
					<div className="w-[15%] h-[80px] flex justify-start items-center">
						Vol.
					</div>
				</div>
				{isLoading ? (
					<div className="text-center">Loading...</div>
				) : listStock.length === 0 ? (
					<div className="text-center">No data</div>
				) : (
					listStock.map((stock, index) => (
						<button
							onClick={() =>
								router.push(`portfolio/${stock.symbol.toLowerCase()}`)
							}
							key={stock.id}
							className={`flex flex-row text-[#4C506B] text-[14px] font-normal ${
								index % 2 === 0 ? "bg-gray-200" : ""
							}`}
						>
							<div className="w-[25%] h-[80px] flex justify-start items-center pl-[40px]">
								{/* <img
										src={stock.img_url}
										alt=""
										className="h-[50px] w-[50px] mx-[20px]"
									/> */}
								{stock.symbol}
							</div>
							<div className="w-[15%] h-[80px] flex justify-start items-center">
								{stock.close}
							</div>
							<div className="w-[15%] h-[80px] flex justify-start items-center">
								{stock.open}
							</div>
							<div className="w-[15%] h-[80px] flex justify-start items-center">
								{stock.high}
							</div>
							<div className="w-[15%] h-[80px] flex justify-start items-center">
								{stock.low}
							</div>
							<div className="w-[15%] h-[80px] flex justify-start items-center">
								{stock.volume}
							</div>
						</button>
					))
				)}
			</div>
		</div>
	);
};

export default Market;
Market.Layout = MainLayout;
