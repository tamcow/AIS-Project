export default function getCurrentDateFormatted(): string {
	const today = new Date();

	// Lấy năm, tháng, ngày và định dạng chúng
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0"); // Tháng trong JavaScript bắt đầu từ 0
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}
