import { MainLayout } from "@/components/layouts/MainLayout";
import TradingViewWidget from "@/components/portfolio/TradingViewWidget";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Portfolio = () => {
	const router = useRouter();
	const { bank_code } = router.query;
	console.log("router.query", router.query);
	const [infoBank, setInfoBank] = useState<any>();
	const getInfoBank = async () => {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}api/stock/info/${bank_code}`
		);
		console.log("response.data", response.data);
		setInfoBank(response.data);
	};
	useEffect(() => {
		if (bank_code) {
			getInfoBank();
		}
	}, []);
	useEffect(() => {
		if (bank_code) {
			getInfoBank();
		}
	}, [bank_code]);
	return (
		<div className="bg-[#F0F1F5] py-[50px] px-[5%] flex flex-col">
			<div className="bg-white flex flex-row items-center justify-start">
				<img
					src={`/assets/images/${bank_code?.toString().toLowerCase()}_icon.svg`}
					alt=""
					className="w-[120px] my-[10px] mx-[30px]"
				/>
				<div className="text-[40px] font-bold text-black">
					{infoBank?.longName}
				</div>
			</div>
			<div className="h-[50px] bg-[#F0F1F5]"></div>
			<div className="bg-white p-[3%] flex flex-col">
				<div className="text-[40px] font-bold text-black">
					{infoBank?.symbol}
				</div>
				<div className="flex flex-row leading-loose">
					<div className="flex flex-col w-[50%]">
						<div>{infoBank?.address1}</div>
						<div>{infoBank?.address2}</div>
						<div>{infoBank?.city}</div>
						<div>{infoBank?.country}</div>
						<div>+{infoBank?.phone}</div>
						<a
							href={infoBank?.website}
							className="hover:text-blue-700 hover:underline hover:underline-offset-4"
							target="_blank"
						>
							{infoBank?.website}
						</a>
					</div>
					<div className="flex flex-col w-[50%]">
						<div>
							Sector(s):{" "}
							<span className="font-semibold">{infoBank?.sector}</span>
						</div>
						<div>
							Industry:{" "}
							<span className="font-semibold">{infoBank?.industry}</span>
						</div>
						<div>
							Full Time Employees:{" "}
							<span className="font-semibold">
								{infoBank?.fullTimeEmployees}
							</span>
						</div>
					</div>
				</div>
				<div className="text-[20px] text-black mt-[20px] mb-[10px] font-semibold">Description</div>
				<div className="leading-normal">{infoBank?.longBusinessSummary}</div>

				<div className="flex flex-row items-center mt-[20px] justify-around">
					<div className="w-[23%] bg-[#F0F1F5] flex flex-col p-[2%]">
						<div className="flex flex-row justify-between my-[5px]">
							<div className="text-[16px] font-normal">Opening Price</div>
							<div className="text-[16px] font-normal text-[#F0A03E]">{infoBank?.open}</div>
						</div>
						<div className="flex flex-row justify-between my-[5px]">
							<div className="text-[16px] font-normal">High Price</div>
							<div className="text-[16px] font-normal text-[#F0A03E]">{infoBank?.dayHigh}</div>
						</div>
						<div className="flex flex-row justify-between my-[5px]">
							<div className="text-[16px] font-normal">Low Price</div>
							<div className="text-[16px] font-normal text-[#F0A03E]">{infoBank?.dayLow}</div>
						</div>
						<div className="text-center text-[12px] text-[#757677] my-[10px]">
							Unit: VND
						</div>
						<div className="border-t-[1px] border-solid border-[#e2e2e2] mb-[10px]"></div>
						<div className="flex flex-row justify-between my-[5px]">
							<div className="text-[16px] font-normal">Basic EPS</div>
							<div className="text-[16px] font-normal text-[#F0A03E]">{infoBank?.trailingEps}</div>
						</div>
						<div className="flex flex-row justify-between my-[5px]">
							<div className="text-[16px] font-normal">P/E</div>
							<div className="text-[16px] font-normal text-[#F0A03E]">{infoBank?.trailingPE}</div>
						</div>
						<div className="flex flex-row justify-between my-[5px]">
							<div className="text-[16px] font-normal">P/B</div>
							<div className="text-[16px] font-normal text-[#F0A03E]">{infoBank?.priceToBook}</div>
						</div>
					</div>
					<div className="w-[75%]">
						<TradingViewWidget />
					</div>
				</div>
				<div className="border-t-[1px] border-solid border-[#c2c2c2] my-[3%]"></div>
				<div className="text-[40px] font-bold text-black mb-[30px]">NEWS</div>
				<div className="flex flex-row justify-between">
					<div className="flex flex-col w-[20%]">
						<img src="/assets/images/elonmusk_avatar.svg" alt="" />
						<div className="mt-[10px] text-[18px] font-semibold">
							Elon Musk exercises options, sells another $930 million in Tesla
							stock
						</div>
						<div className="flex flex-row justify-between items-center my-[10px]">
							<div className="flex flex-row items-center">
								<img
									src="/assets/images/default_avatar.svg"
									alt=""
									className="w-[20px] h-[20px]"
								/>
								<div className="text-[12px] text-[#c2c2c2] ml-[5px]">
									Mike Murphy
								</div>
							</div>
							<div className="text-[12px] text-[#c2c2c2] ml-[5px]">
								15 November 2021
							</div>
						</div>
						<div className="text-[12px] text-[#c2c2c2] ml-[5px] leading-normal">
							Elon Musk continues to unload Tesla Inc. stock, exercising his
							options and selling another $930 million in shares Monday after
							dumping $6.9 billion in stock last week. According to filings
							Monday with the Securities and Exchanges Commission, Musk sold
							more than 934,000 shares Monday at prices ranging from $6.25 to
							$1,028 a share.
						</div>
						<button className="bg-[#A8071A] rounded-[3px] justify-center items-center px-[20px] py-[5px] w-min my-[10px]">
							<div className="text-center text-gray-200 text-base font-semibold whitespace-nowrap">
								Read News
							</div>
						</button>
					</div>
					<div className="flex flex-col w-[50%]">
						<img src="/assets/images/image_example_8.svg" alt="" />
						<div className="mt-[10px] text-[18px] font-semibold">
							4 stock picks for the post-pandemic ‘nesting’ economy from a
							five-star money manager
						</div>
						<div className="flex flex-row justify-between items-center my-[10px]">
							<div className="flex flex-row items-center">
								<img
									src="/assets/images/default_avatar.svg"
									alt=""
									className="w-[20px] h-[20px]"
								/>
								<div className="text-[12px] text-[#c2c2c2] ml-[5px]">
									Philip van Doorn
								</div>
							</div>
							<div className="text-[12px] text-[#c2c2c2] ml-[5px]">
								16 November 2021
							</div>
						</div>
						<div className="text-[12px] text-[#c2c2c2] ml-[5px] leading-normal">
							The pandemic has driven changes in behavior that are important to
							investors, as they underline growth opportunities that are likely
							to extend for many years, according to Alex Ely of Macquarie Asset
							Management. Ely manages the $5.1 billion Delaware Smid Cap Growth
							Fund DFDIX, which is rated five stars (the highest rating) by
							Morningstar. There’s more information about the fund’s performance
							below. The Delaware Smid Cap Growth Fund typically holds about 35
							stocks of small-cap and mid-cap companies that Ely believes are
							well-positioned to continue growing quickly as they take advantage
							of disruptive trends.
						</div>
						<button className="bg-[#A8071A] rounded-[3px] justify-center items-center px-[20px] py-[5px] w-min my-[10px]">
							<div className="text-center text-gray-200 text-base font-semibold whitespace-nowrap">
								Read News
							</div>
						</button>
					</div>
					<div className="flex flex-col w-[20%]">
						<img src="/assets/images/image_example_9.svg" alt="" />
						<div className="mt-[10px] text-[18px] font-semibold">
							The 4% rule is being debated — again but here’s what you should do
						</div>
						<div className="flex flex-row justify-between items-center my-[10px]">
							<div className="flex flex-row items-center">
								<img
									src="/assets/images/default_avatar.svg"
									alt=""
									className="w-[20px] h-[20px]"
								/>
								<div className="text-[12px] text-[#c2c2c2] ml-[5px]">
									Alessandra Malito
								</div>
							</div>
							<div className="text-[12px] text-[#c2c2c2] ml-[5px]">
								15 November 2021
							</div>
						</div>
						<div className="text-[12px] text-[#c2c2c2] ml-[5px] leading-normal">
							The 4% rule — which suggests retirees withdraw 4% of their
							retirement savings every year for living expenses — may be too
							high, according to the latest analysis of the popular
							strategy.Retirement Tip of the Week: Don’t just assume you need to
							withdraw 4% in retirement because it’s been a general rule of
							thumb for so long. Assess your income needs for retirement first,
							and adjust your withdrawal rate as needed.
						</div>
						<button className="bg-[#A8071A] rounded-[3px] justify-center items-center px-[20px] py-[5px] w-min my-[10px]">
							<div className="text-center text-gray-200 text-base font-semibold whitespace-nowrap">
								Read News
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
Portfolio.Layout = MainLayout;
