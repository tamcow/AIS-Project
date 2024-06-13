import React, { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "@/redux/store";
import { setPopupSignup, setUser } from "@/redux/authSlice";
import decodeJWT from "@/utils/decodeJWT";
import { toast } from "react-toastify";

const Signup = () => {
	const [email, setEmail] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const dispatch = useAppDispatch();
	const signup = async () => {
		if (username === "") {
			toast.error("Missing username");
			return;
		}
		if (email === "") {
			toast.error("Missing email");
			return;
		}
		if (password === "") {
			toast.error("Missing password");
			return;
		}
		if (password !== confirmPassword) {
			toast.error("Confirm Password no match");
			return;
		}
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}api/users/signup`,
			{
				email,
				name: username,
				password,
			}
		);
		const payload = decodeJWT(data.token);
		dispatch(
			setUser({
				user_id: payload._id,
				username: payload.name,
				isAdmin: payload.isAdmin,
				email: payload.email,
				token: data.token
			})
		);
		dispatch(setPopupSignup(false));
		toast.success("Signup successful");
	};
	return (
		<div className="w-screen h-screen fixed bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
			<div className="w-[20%] h-min bg-white flex flex-col px-[30px] justify-center rounded-[10px] relative">
				<button onClick={() => dispatch(setPopupSignup(false))}>
					<img
						src="/assets/images/close.svg"
						alt=""
						className="absolute top-0 right-0"
					/>
				</button>
				<div className="text-indigo-500 text-[30px] font-bold mb-[8px] mt-[20px]">
					Sign up
				</div>
				<input
					type="text"
					className="border-[1px] rounded-[16px] h-[51px] text-[16px] text-normal text-[#525252] px-[13px] placeholder:text-[16px] placeholder:text-normal placeholder:text-[#525252] my-[10px]"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					className="border-[1px] rounded-[16px] h-[51px] text-[16px] text-normal text-[#525252] px-[13px] placeholder:text-[16px] placeholder:text-normal placeholder:text-[#525252] my-[10px]"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					className="border-[1px] rounded-[16px] h-[51px] text-[16px] text-normal text-[#525252] px-[13px] placeholder:text-[16px] placeholder:text-normal placeholder:text-[#525252] my-[10px]"
					placeholder="Enter your password..."
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="password"
					className="border-[1px] rounded-[16px] h-[51px] text-[16px] text-normal text-[#525252] px-[13px] placeholder:text-[16px] placeholder:text-normal placeholder:text-[#525252] my-[10px]"
					placeholder="Confirm password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button
					onClick={signup}
					className="bg-indigo-500 rounded-lg justify-center items-center inline-flex py-[10px] my-[20px]"
				>
					<div className="text-center text-gray-200 text-base font-semibold">
						Sign up
					</div>
				</button>

				<button className="bg-gray-200 rounded-lg justify-center items-center inline-flex py-[8px] mt-[10px] mb-[30px]">
					<div className="text-center text-indigo-500 text-base font-semibold">
						Sign in
					</div>
				</button>
			</div>
		</div>
	);
};

export default Signup;
