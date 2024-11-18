export const formatPrice = (price: number) => {
  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  return `${price.toLocaleString("vi-VN")} VNĐ`;
};

export const formatDate = (date: any) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}`;
};
