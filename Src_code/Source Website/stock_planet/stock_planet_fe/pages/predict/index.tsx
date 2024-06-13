import { MainLayout } from "@/components/layouts/MainLayout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import PredictChart from "@/components/predict/PredictChart";
import BasicChart from "@/components/predict/BasicChart";
import getDateAfter30Days from "@/utils/getDateAfter30Days";
import { setStocks } from "@/redux/stockSlice";
import getCurrentDateFormatted from "@/utils/getCurrentDay";

const Predict = () => {
	const dispatch = useAppDispatch();
	const { token } = useAppSelector((state: RootState) => state.auth);
	const { stocks } = useAppSelector((state: RootState) => state.stock);
	const [urlChart, setUrlChart] = useState<string>("");
	const [pe, setPe] = useState<number | null>(null);
	const [roa, setRoa] = useState<number | null>(null);
	const [roe, setRoe] = useState<number | null>(null);
	const [ocf, setOcf] = useState<number | null>(null);
	const [totalDebt, setTotalDebt] = useState<number | null>(null);
	const [symbol, setSymbol] = useState<string>("");
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");

	const [isLoading, setLoading] = useState<boolean>(false);
	const getData = async () => {
		try {
			setLoading(true);
			if (symbol === "") {
				toast.error("Missing code");
				setLoading(false);
				return;
			}
			if (startDate === "") {
				toast.error("Missing start date");
				setLoading(false);
				return;
			}
			if (endDate === "") {
				toast.error("Missing end date");
				setLoading(false);
				return;
			}
			if (token) {
				const res = await axios.get(
					`${
						process.env.NEXT_PUBLIC_API_URL
					}api/predict?bank_code=${symbol.toLowerCase()}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				console.log("res", res);
				console.log("res.data", res.data);
				if (res.status === 200) {
					setUrlChart(res.data.chart_url);
					setPe(parseFloat(res.data?.pe.toFixed(3)));
					setRoa(parseFloat(res.data?.roa.toFixed(3)));
					setRoe(parseFloat(res.data?.roe.toFixed(3)));
					setOcf(parseFloat(res.data?.ocf.toFixed(3)));
					setTotalDebt(parseFloat(res.data?.totalDebt.toFixed(3)));
				}
			} else {
				toast.error("Please sign in.");
			}
			setLoading(false);
		} catch (error) {
			console.log("error", error);
		}
	};
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
	useEffect(() => {
		setStartDate(getCurrentDateFormatted());
		getStocks();
	}, []);
	return isLoading ? (
		<div>Loading</div>
	) : (
		<div className="bg-[#F0F1F5] py-[50px] px-[5%] flex flex-col">
			<div className="bg-white flex flex-row items-center justify-start p-[30px]">
				<div className="text-[40px] font-bold text-black">Prediction Price</div>
			</div>
			<div className="h-[50px] bg-[#F0F1F5]"></div>
			<div className="bg-white p-[3%] flex flex-col">
				<div className="text-[40px] font-bold text-black">{symbol}</div>
				<div className="flex flex-row mt-[20px] px-[30px]">
					<div className="w-[60%] bg-[#f0f1f5] flex justify-center items-center">
						{urlChart !== "" && (
							<img src={urlChart} alt="" className="w-full h-full" />
						)}
					</div>
					<div className="flex flex-col justify-start items-center w-[40%]">
						<div className="border-[1px] border-solid border-[#001E6C] h-[60px] w-[80%] rounded-[16px] box_shadow_inner flex flex-row items-center px-[15px] relative">
							<div className="absolute top-[-10px] left-[20px] bg-white px-[2px]">
								Code
							</div>
							<select
								onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
									setSymbol(e.target.value)
								}
								className="border-none outline-none w-[100%] placeholder:text-[#808FB5] text-[24px] h-[90%]"
								defaultValue={"Choose code stock"}
							>
								<option disabled>Choose code stock</option>
								{stocks.map((i) => (
									<option key={i.id} value={i.symbol}>
										{i.symbol}
									</option>
								))}
							</select>
						</div>
						<div className="border-[1px] border-solid border-[#001E6C] h-[60px] w-[80%] rounded-[16px] box_shadow_inner flex flex-row items-center px-[15px] my-[80px] relative">
							<div className="absolute top-[-10px] left-[20px] bg-white px-[2px]">
								Start Date
							</div>
							<input
								type="date"
								placeholder="Start Date*"
								value={startDate}
								min="1980-01-01"
								max={endDate ? endDate : getDateAfter30Days()}
								onChange={(e) => setStartDate(e.target.value)}
								className="placeholder:text-[#808FB5] text-[24px] w-[100%] focus:outline-none h-[90%]"
							/>
						</div>
						<div className="border-[1px] border-solid border-[#001E6C] h-[60px] w-[80%] rounded-[16px] box_shadow_inner flex flex-row items-center px-[15px] relative">
							<div className="absolute top-[-10px] left-[20px] bg-white px-[2px]">
								End Date
							</div>
							<input
								type="date"
								placeholder="End Date*"
								value={endDate}
								min={startDate ? startDate : "1980-01-01"}
								max={getDateAfter30Days()}
								onChange={(e) => setEndDate(e.target.value)}
								className="placeholder:text-[#808FB5] text-[24px] w-[100%] focus:outline-none h-[90%]"
							/>
						</div>
						<button
							onClick={getData}
							className="bg-indigo-500 rounded-lg justify-center items-center inline-flex w-[80%] py-[10px] mt-[80px]"
						>
							<div className="text-center text-white text-base font-semibold">
								Predict
							</div>
						</button>
					</div>
				</div>
				<div className="w-[50%] flex flex-col self-center mt-[60px] bg-[#F0F1F5] py-[30px] px-[50px]">
					<div className="flex flex-row w-full justify-center items-center">
						<div className="flex flex-col min-w-[30%] justify-center items-center">
							<div className="text-[20px] font-semibold mb-[15px]">PE</div>
							<div className="text-[14px] font-semibold text-[#F0A03E]">
								{pe ? pe : "N/A"}
							</div>
						</div>
						<div className="flex flex-col min-w-[30%] justify-center  items-center">
							<div className="text-[20px] font-semibold mb-[15px]">ROE</div>
							<div className="text-[14px] font-semibold text-[#F0A03E]">
								{roa ? roa : "N/A"}
							</div>
						</div>
						<div className="flex flex-col min-w-[30%] justify-center  items-center">
							<div className="text-[20px] font-semibold mb-[15px]">ROA</div>
							<div className="text-[14px] font-semibold text-[#F0A03E]">
								{roe ? roe : "N/A"}
							</div>
						</div>
					</div>
					<div className="w-full border-t-[1px] border-[#e1e1e1] border-solid my-[15px]"></div>
					<div className="flex flex-row w-full">
						<div className="flex flex-col min-w-[50%] justify-center  items-center">
							<div className="text-[20px] font-semibold mb-[15px]">OCF</div>
							<div className="text-[14px] font-semibold text-[#F0A03E]">
								{ocf ? ocf : "N/A"}
							</div>
						</div>
						<div className="flex flex-col min-w-[50%] justify-center  items-center">
							<div className="text-[20px] font-semibold mb-[15px]">
								Total Debt
							</div>
							<div className="text-[14px] font-semibold text-[#F0A03E]">
								{totalDebt ? totalDebt : "N/A"}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Predict;
Predict.Layout = MainLayout;
