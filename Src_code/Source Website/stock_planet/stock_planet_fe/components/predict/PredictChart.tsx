// import React, { useEffect } from "react";
// import Chart from "chart.js/auto";

// type PredictChartProps = {
// 	trainData: number[];
// 	testData: number[];
// 	valData: number[];
// 	testPredictions: number[];
// 	valPredictions: number[];
// 	next30daysPredictions: number[];
// 	totalLength: number;
// };

// const PredictChart: React.FC<PredictChartProps> = ({
// 	trainData,
// 	testData,
// 	valData,
// 	testPredictions,
// 	valPredictions,
// 	next30daysPredictions,
// 	totalLength,
// }) => {
// 	useEffect(() => {
// 		const ctx = document.createElement("canvas").getContext("2d");
// 		let localChart: Chart | null = null;
// 		const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
// 		const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
// 		if (ctx) {
// 			localChart = new Chart(ctx, {
// 				type: "line",
// 				data: {
// 					labels: xValues,
// 					// labels: Array.from({ length: totalLength }, (_, i) => i + 1),
// 					// datasets: [
// 					// 	{
// 					// 		label: "Train",
// 					// 		data: trainData,
// 					// 		borderColor: "blue",
// 					// 		borderWidth: 1,
// 					// 	},
// 					// 	{
// 					// 		label: "Test",
// 					// 		data: testData,
// 					// 		borderColor: "green",
// 					// 		borderWidth: 1,
// 					// 	},
// 					// 	{
// 					// 		label: "Test Predictions",
// 					// 		data: testPredictions,
// 					// 		borderColor: "red",
// 					// 		borderWidth: 1,
// 					// 	},
// 					// 	{
// 					// 		label: "Validate",
// 					// 		data: valData,
// 					// 		borderColor: "purple",
// 					// 		borderWidth: 1,
// 					// 	},
// 					// 	{
// 					// 		label: "Validate Predictions",
// 					// 		data: valPredictions,
// 					// 		borderColor: "orange",
// 					// 		borderWidth: 1,
// 					// 	},
// 					// 	{
// 					// 		label: "Next 30 days Predictions",
// 					// 		data: next30daysPredictions,
// 					// 		borderColor: "black",
// 					// 		borderWidth: 1,
// 					// 	},
// 					// ],
// 					datasets: [
// 						{
// 							backgroundColor: "rgba(0,0,255,1.0)",
// 							borderColor: "rgba(0,0,255,0.1)",
// 							data: yValues,
// 						},
// 					],
// 				},
// 				options: {
// 					scales: {
// 						y: {
// 							beginAtZero: false,
// 						},
// 					},
// 				},
// 			});
// 		}

// 		return () => {
// 			if (localChart) {
// 				localChart.destroy();
// 			}
// 		};
// 	}, [
// 		trainData,
// 		testData,
// 		valData,
// 		testPredictions,
// 		valPredictions,
// 		next30daysPredictions,
// 		totalLength,
// 	]);

// 	return <canvas id="myChart"></canvas>;
// };

// export default PredictChart;

// components/PredictChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

type PredictChartProps = {
	trainData: number[];
	testData: number[];
	valData: number[];
	testPredictions: number[];
	valPredictions: number[];
	next30daysPredictions: number[];
	totalLength: number;
};

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const PredictChart: React.FC<PredictChartProps> = ({
	trainData,
	testData,
	valData,
	testPredictions,
	valPredictions,
	next30daysPredictions,
	totalLength,
}) => {
	const data = {
		labels: Array.from({ length: totalLength }, (_, i) => i + 1),
		datasets: [
			{
				label: "Train",
				data: trainData,
				borderColor: "blue",
				borderWidth: 1,
			},
			{
				label: "Test",
				data: testData,
				borderColor: "green",
				borderWidth: 1,
			},
			{
				label: "Test Predictions",
				data: testPredictions,
				borderColor: "red",
				borderWidth: 1,
			},
			{
				label: "Validate",
				data: valData,
				borderColor: "purple",
				borderWidth: 1,
			},
			{
				label: "Validate Predictions",
				data: valPredictions,
				borderColor: "orange",
				borderWidth: 1,
			},
			{
				label: "Next 30 days Predictions",
				data: next30daysPredictions,
				borderColor: "black",
				borderWidth: 1,
			},
		],
	};

	return <Line data={data} />;
};

export default PredictChart;
