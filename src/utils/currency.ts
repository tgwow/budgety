export const numberToCurrency = (value: number, currency = 'USD') =>
  new Intl.NumberFormat('en', { style: 'currency', currency }).format(value);
