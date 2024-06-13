import React, { useState } from "react";
import Header from "@/components/common/Header";
import { LayoutProps } from "@/models/common";
import Footer from "@/components/common/Footer";
import Signin from "@/components/auth/signin";
import { RootState, useAppSelector } from "@/redux/store";
import Signup from "@/components/auth/signup";
export function MainLayout({ children }: LayoutProps) {
	const { popupSignin, popupSignup } = useAppSelector(
		(state: RootState) => state.auth
	);
	return (
		<div className="relative">
			<Header />
			<div className="">{children}</div>
			<Footer />
			{popupSignin && <Signin />}
			{popupSignup && <Signup />}
		</div>
	);
}
