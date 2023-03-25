function FormatCurrency(number: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    currencyDisplay: 'symbol',
  }).format(number);
}

export default FormatCurrency;
