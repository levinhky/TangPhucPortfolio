export const formatPrice = (price: number) => {
  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  return `${price.toLocaleString("vi-VN")} VNĐ`;
};

export const formatDateWithDot = (date: any) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}`;
};

export const formatDateWithSlash = (date: any) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}`;
};

export const getScheduleHomeList = (events: any) => {
  return events
    .sort((a: any, b: any) => +new Date(b.start) - +new Date(a.start)) // Sort by date descending
    .slice(0, 3);
};

export const formatVietnameseDate = (dateString: any) => {
  const days = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const date = new Date(dateString);
  const dayOfWeek = days[date.getDay()];
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];

  return `${dayOfWeek}, ${day} ${month}`;
};
