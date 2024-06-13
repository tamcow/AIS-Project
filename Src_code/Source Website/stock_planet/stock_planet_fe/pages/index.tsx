import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
	return (
		<div className="flex flex-col w-full">
			<div className="mx-[30px] h-min bg-[#EEF8FE] rounded-[15px] flex flex-row justify-between">
				<div className="flex flex-col w-[50%] justify-center pl-[80px]">
					<div className="text-[#262833] text-6xl font-bold my-[15px]">
						Buy & Sell
					</div>
					<div className="text-[#7B61FF] text-6xl font-bold inline-block my-[15px]">
						Stock Instant
					</div>
					<div className="text-[#7A8189] text-xl font-semibold my-[15px]">
						Join world's biggest & trusted Exchange. Trade Stock
					</div>
					<button className="bg-[#5367FE] rounded-lg justify-center items-center inline-flex px-[32px] w-min my-[15px] py-[10px]">
						<div className="text-center text-gray-200 text-base font-semibold">
							Starting
						</div>
					</button>
				</div>
				<div className="w-[50%]">
					<img src="/assets/images/image_example.svg" alt="" />
				</div>
			</div>
			<div className="flex flex-col items-center justify-start mt-[100px]">
				<div className="text-[#5367FE] text-[20px] font-medium">Top Market</div>
				<div className="text-black text-[40px] font-semibold mt-[20px]">
					GET VARIOUS STOCK
				</div>
				<div className="grid grid-cols-4 gap-4 mt-[60px] w-full px-[80px]">
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<div className="flex flex-row items-center my-[20px]">
							<img
								src="/assets/images/nvidia_logo.svg"
								alt=""
								className="h-[50px] w-[50px]"
							/>
							<div className="text-black text-2xl font-semibold mx-[5px]">
								nVIDIA
							</div>
							<div className="p-2 bg-gray-200 rounded border border-black border-opacity-10 text-blue-400 text-xl font-medium mx-[5px]">
								nVDA
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="text-black text-[30px] font-bold">$203.65</div>
							<div className="text-green-500 text-xl font-semibold mx-[10px]">
								+2%
							</div>
						</div>
						<img src="/assets/images/Graph.svg" alt="" className="my-[20px]" />
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<div className="flex flex-row items-center my-[20px]">
							<img
								src="/assets/images/nvidia_logo.svg"
								alt=""
								className="h-[50px] w-[50px]"
							/>
							<div className="text-black text-2xl font-semibold mx-[5px]">
								nVIDIA
							</div>
							<div className="p-2 bg-gray-200 rounded border border-black border-opacity-10 text-blue-400 text-xl font-medium mx-[5px]">
								nVDA
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="text-black text-[30px] font-bold">$203.65</div>
							<div className="text-green-500 text-xl font-semibold mx-[10px]">
								+2%
							</div>
						</div>
						<img src="/assets/images/Graph.svg" alt="" className="my-[20px]" />
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<div className="flex flex-row items-center my-[20px]">
							<img
								src="/assets/images/nvidia_logo.svg"
								alt=""
								className="h-[50px] w-[50px]"
							/>
							<div className="text-black text-2xl font-semibold mx-[5px]">
								nVIDIA
							</div>
							<div className="p-2 bg-gray-200 rounded border border-black border-opacity-10 text-blue-400 text-xl font-medium mx-[5px]">
								nVDA
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="text-black text-[30px] font-bold">$203.65</div>
							<div className="text-green-500 text-xl font-semibold mx-[10px]">
								+2%
							</div>
						</div>
						<img src="/assets/images/Graph.svg" alt="" className="my-[20px]" />
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<div className="flex flex-row items-center my-[20px]">
							<img
								src="/assets/images/nvidia_logo.svg"
								alt=""
								className="h-[50px] w-[50px]"
							/>
							<div className="text-black text-2xl font-semibold mx-[5px]">
								nVIDIA
							</div>
							<div className="p-2 bg-gray-200 rounded border border-black border-opacity-10 text-blue-400 text-xl font-medium mx-[5px]">
								nVDA
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="text-black text-[30px] font-bold">$203.65</div>
							<div className="text-green-500 text-xl font-semibold mx-[10px]">
								+2%
							</div>
						</div>
						<img src="/assets/images/Graph.svg" alt="" className="my-[20px]" />
					</div>
				</div>
			</div>
			<div className="bg-[#F0F1F5] h-[150px] mt-[100px]"></div>
			<img
				src="/assets/images/image_example_1.svg"
				alt=""
				className="mt-[20px]"
			/>
			<div className="flex flex-col items-center justify-start mt-[100px]">
				<div className="text-[#5367FE] text-[20px] font-medium">Top Market</div>
				<div className="text-black text-[40px] font-semibold mt-[20px]">
					OUR BEST SERVICE
				</div>
				<div className="grid grid-cols-3 gap-3 mt-[60px] w-full px-[15%]">
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<img
							src="/assets/images/image_example_2.svg"
							alt=""
							className="h-[50px] w-[50px] my-[20px]"
						/>
						<div className=" text-black text-[20px] font-semibold">
							Safety comes First
						</div>
						<div className="text-black text-opacity-70 text-[16px] font-normal my-[20px] mb-[20px]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</div>
						<div className="h-[30px] w-full"></div>
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<img
							src="/assets/images/image_example_2.svg"
							alt=""
							className="h-[50px] w-[50px] my-[20px]"
						/>
						<div className=" text-black text-[20px] font-semibold">
							Easy Deposit & Withdraws
						</div>
						<div className="text-black text-opacity-70 text-[16px] font-normal my-[20px] mb-[20px]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</div>
						<div className="h-[30px] w-full"></div>
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<img
							src="/assets/images/image_example_4.svg"
							alt=""
							className="h-[50px] w-[50px] my-[20px]"
						/>
						<div className=" text-black text-[20px] font-semibold">
							Low Charges
						</div>
						<div className="text-black text-opacity-70 text-[16px] font-normal my-[20px] mb-[20px]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</div>
						<div className="h-[30px] w-full"></div>
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<img
							src="/assets/images/image_example_5.svg"
							alt=""
							className="h-[50px] w-[50px] my-[20px]"
						/>
						<div className=" text-black text-[20px] font-semibold">
							Deep Encryption
						</div>
						<div className="text-black text-opacity-70 text-[16px] font-normal my-[20px] mb-[20px]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</div>
						<div className="h-[30px] w-full"></div>
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<img
							src="/assets/images/image_example_6.svg"
							alt=""
							className="h-[50px] w-[50px] my-[20px]"
						/>
						<div className=" text-black text-[20px] font-semibold">
							Fast KYC
						</div>
						<div className="text-black text-opacity-70 text-[16px] font-normal my-[20px] mb-[20px]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</div>
						<div className="h-[30px] w-full"></div>
					</div>
					<div className="bg-white rounded-lg shadow-2xl border-[#e1e0e0] border-[2px] border-solid flex-col justify-start items-start inline-flex px-[25px]">
						<img
							src="/assets/images/image_example_7.svg"
							alt=""
							className="h-[50px] w-[50px] my-[20px]"
						/>
						<div className=" text-black text-[20px] font-semibold">
							24/7 Support
						</div>
						<div className="text-black text-opacity-70 text-[16px] font-normal my-[20px] mb-[20px]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</div>
						<div className="h-[30px] w-full"></div>
					</div>
				</div>
			</div>
			<div className="w-full h-[100px]"></div>
		</div>
	);
}
Home.Layout = MainLayout;
