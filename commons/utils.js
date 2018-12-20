export function formatNumber(number) {
  const optionsDefault = {
    decimals: -1,
    decimalPoint: '.',
    thousandSeparator: ',',
  };
  let numberParsed = number;
  if (optionsDefault.decimals > -1) {
    numberParsed = Number(numberParsed.toFixed(optionsDefault.decimals));
  }
  numberParsed = numberParsed.toString();
  let parts = numberParsed.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, optionsDefault.thousandSeparator);
  return parts.join(optionsDefault.decimalPoint);
}
