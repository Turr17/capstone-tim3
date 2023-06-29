export const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const formatCurrency = (number) => {
  return new Intl.NumberFormat(['ban','id']).format(number)
}