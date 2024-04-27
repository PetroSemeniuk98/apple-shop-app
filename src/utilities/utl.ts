const CURRENCY_FORMAT = new Intl.NumberFormat("de-DE", {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CURRENCY_FORMAT.format(number);
};

export { formatCurrency };
