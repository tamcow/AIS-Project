import React, { useEffect } from "react";
declare let window: any;

const TradingViewWidget = ({ symbol }: { symbol?: string }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://s3.tradingview.com/tv.js";
		script.async = true;
		script.onload = () => {
			new window.TradingView.widget({
				width: "fullscreen",
				height: 610,
				symbol: symbol || "NASDAQ:TSLA",
				interval: "D",
				timezone: "Etc/UTC",
				theme: "light",
				style: "1",
				locale: "vn",
				toolbar_bg: "#f1f3f6",
				enable_publishing: false,
				allow_symbol_change: true,
				container_id: "tradingview-widget",
			});
		};
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [symbol]);

	return <div id="tradingview-widget" />;
};

export default TradingViewWidget;
