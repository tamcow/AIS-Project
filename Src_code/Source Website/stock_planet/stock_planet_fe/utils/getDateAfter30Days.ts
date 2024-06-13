export default function getDateAfter30Days(): string {
	const today = new Date();
	const futureDate = new Date(today);

	// Thêm 30 ngày
	futureDate.setDate(futureDate.getDate() + 30);

	// Lấy năm, tháng, ngày và định dạng chúng
	const year = futureDate.getFullYear();
	const month = String(futureDate.getMonth() + 1).padStart(2, "0"); // Tháng trong JavaScript bắt đầu từ 0
	const day = String(futureDate.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}
