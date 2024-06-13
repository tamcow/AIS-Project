import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { setPopupSignin, setPopupSignup, setUser } from "@/redux/authSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Header = () => {
	const router = useRouter();
	const [activePage, setActivePage] = useState<0 | 1 | 2>(0);
	const classInActivePage =
		"mx-[20px] text-[#090A0D] text-[20px] font-[500] hover:underline hover:underline-offset-8";
	const classActivePage =
		"mx-[20px] text-[#5367FE] text-[20px] font-[500] hover:cursor-default";
	const dispatch = useAppDispatch();
	const { username, user_id } = useAppSelector(
		(state: RootState) => state.auth
	);
	const urlData = {
		0: "/",
		1: "/market",
		2: "/predict",
		// 3: "/portfolio",
	};
	const redirectFunc = (page: 0 | 1 | 2) => {
		setActivePage(page);
		router.push(urlData[page]);
	};
	return (
		<div className="flex flex-row py-[30px] w-full px-[50px] justify-between">
			<button
				onClick={() => router.push("/")}
				className="flex flex-row items-center"
			>
				<img
					src="/assets/images/logo.svg"
					alt=""
					className="w-[40px] h-[40px]"
				/>
				<div className="text-black text-[20px] font-bold mx-[10px]">
					Stock Planet
				</div>
			</button>
			<div className="flex flex-row justify-between">
				<button
					onClick={() => redirectFunc(0)}
					className={activePage === 0 ? classActivePage : classInActivePage}
				>
					Home
				</button>
				<button
					onClick={() => redirectFunc(1)}
					className={activePage === 1 ? classActivePage : classInActivePage}
				>
					Market
				</button>
				<button
					onClick={() => redirectFunc(2)}
					className={activePage === 2 ? classActivePage : classInActivePage}
				>
					Predict
				</button>
				{/* <button
					onClick={() => redirectFunc(3)}
					className={activePage === 3 ? classActivePage : classInActivePage}
				>
					Portfolio
				</button> */}
			</div>
			<div className="flex flex-row">
				{username === "" && user_id === "" ? (
					<>
						<button
							onClick={() => dispatch(setPopupSignin(true))}
							className="bg-gray-200 rounded-lg justify-center items-center inline-flex px-[32px] mx-[10px]"
						>
							<div className="text-center text-indigo-500 text-base font-semibold">
								Sign in
							</div>
						</button>
						<button
							onClick={() => dispatch(setPopupSignup(true))}
							className="bg-indigo-500 rounded-lg justify-center items-center inline-flex px-[32px] mx-[10px]"
						>
							<div className="text-center text-gray-200 text-base font-semibold">
								Register
							</div>
						</button>
					</>
				) : (
					<>
						<img
							src="/assets/images/avatar_user.png"
							alt=""
							className="rounded-full h-[40px] w-[40px]"
						/>
						<div className="mx-[10px] text-[20px] font-bold self-center">
							{username}
						</div>
						<button
							onClick={() => {
								dispatch(
									setUser({
										user_id: "",
										username: "",
										isAdmin: false,
										email: "",
										token: "",
									})
								);
								toast.success("Signed out successfully");
							}}
							className="px-[10px] bg-indigo-500 rounded-full justify-center items-center gap-2 inline-flex"
						>
							<img src="/assets/images/signout_icon.svg" alt="" />
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
