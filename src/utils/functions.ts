export const formatPrice = (price: number) => {
  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  return `${price.toLocaleString("vi-VN")} VNĐ`;
};

export const getDaysInMonth = (
  year: number,
  month: number,
  contentCallback: (day: number) => string
) => {
  const days = [];
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    const day = date.getDate();
    days.push({
      day: day,
      content: contentCallback(day),
    });
    date.setDate(day + 1);
  }

  return days;
};
