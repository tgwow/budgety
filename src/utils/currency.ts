import 'intl';
import 'intl/locale-data/jsonp/en-US';

export const numberToCurrency = (value: number, currency = 'USD') =>
  new global.Intl.NumberFormat('en', { style: 'currency', currency }).format(
    value
  );
