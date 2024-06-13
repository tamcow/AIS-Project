export default function formatDate(date: string | number) {
	const d = new Date(date);
	let month = "" + (d.getMonth() + 1); // Tháng trong JavaScript bắt đầu từ 0
	let day = "" + d.getDate();
	const year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
}
