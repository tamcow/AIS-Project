import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#0D0C2B] flex flex-row px-[8%] py-[3%]">
			<div className="flex flex-col w-[30%]">
				<div className="flex flex-row items-center">
					<div className="bg-white">
						<img
							src="/assets/images/logo.svg"
							alt=""
							className="h-[50px] w-[50px] p-[5px]"
						/>
					</div>
					<div className="text-white font-bold text-[50px] mx-[5px]">SPmt.</div>
				</div>
				<div className="text-white text-[16px] font-base mt-[20px]">
					Maximize your investment in the capital market world with the
					convenience and various features provided by MoToe.
				</div>
				<div className="flex flex-row mt-[40px]">
					<button className="bg-white rounded-[10px] flex flex-row justify-center items-center py-[5px] mr-[10px]">
						<img
							src="/assets/images/icon_apple.svg"
							alt=""
							className="h-[50px] w-[50px] p-[5px]"
						/>
						<div className="flex flex-col justify-center items-start pr-[15px]">
							<div className="text-[12px]">Download on the</div>
							<div className="text-[14px] font-semibold">AppStore</div>
						</div>
					</button>
					<button className="bg-white rounded-[10px] flex flex-row justify-center items-center py-[5px] ml-[10px]">
						<img
							src="/assets/images/icon_android.svg"
							alt=""
							className="h-[50px] w-[50px] p-[5px]"
						/>
						<div className="flex flex-col justify-center items-start pr-[15px]">
							<div className="text-[12px]">GET IT ON</div>
							<div className="text-[14px] font-semibold">Google Play</div>
						</div>
					</button>
				</div>
			</div>

			<div className="flex flex-col w-[20%] ml-[20px]">
				<div className="text-white my-[10px] text-[18px] font-semibold">
					Companies
				</div>
				<div className="text-white my-[10px] text-[16px] font-base">
					About Us
				</div>
				<div className="text-white my-[10px] text-[16px] font-base">
					Journey
				</div>
				<div className="text-white my-[10px] text-[16px] font-base">Blog</div>
				<div className="text-white my-[10px] text-[16px] font-base">
					Contact
				</div>
				<div className="text-white my-[10px] text-[16px] font-base">Help</div>
			</div>
			<div className="flex flex-col w-[20%]">
				<div className="text-white my-[10px] text-[18px] font-semibold">
					Help
				</div>
				<div className="text-white my-[10px] text-[16px] font-base">
					House Rules
				</div>
				<div className="text-white my-[10px] text-[16px] font-base">
					Our Terms
				</div>
				<div className="text-white my-[10px] text-[16px] font-base">
					Privacy & Policy
				</div>
			</div>
			<div className="flex flex-col">
				<div className="text-white my-[10px] text-[18px] font-semibold">
					Contact Us
				</div>
				<div className="flex flex-row items-center">
					<img
						src="/assets/images/essentional.svg"
						alt=""
						className="w-[20px] h-[20px]"
					/>
					<div className="text-white my-[10px] text-[16px] font-base ml-[10px]">
						House Rules
					</div>
				</div>
				<div className="flex flex-row items-center">
					<img
						src="/assets/images/location.svg"
						alt=""
						className="w-[20px] h-[20px]"
					/>
					<div className="text-white my-[10px] text-[16px] font-base ml-[10px]">
						64 Han Thuyen Street, Linh Trung, ThuDuc City, HCM, VietNam
					</div>
				</div>
				<div className="flex flex-row items-center">
					<img
						src="/assets/images/message.svg"
						alt=""
						className="w-[20px] h-[20px]"
					/>
					<div className="text-white my-[10px] text-[16px] font-base ml-[10px]">
						lemaithanh10@gmail.com
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
