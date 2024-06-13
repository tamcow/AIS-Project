import { EmptyLayout } from "@/components/layouts/EmptyLayout";
import { AppPropsWithLayout } from "@/models/common";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<Provider store={store}>
			<main className={inter.className}>
				<Layout>
					<ToastContainer />
					<Component {...pageProps} />
				</Layout>
			</main>
		</Provider>
	);
}
