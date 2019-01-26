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

export function get(obj, path, defaultValue = null) {
  const pathArr = path.split('.');
  const result = pathArr.reduce((o, key) => (o && o[key] !== undefined ? o[key] : undefined), obj);
  if (typeof result === 'undefined') return defaultValue;
  else return result;
}

export function isEmpty(data) {
  switch (typeof data) {
    case 'object': {
      if (data instanceof Array) {
        return data.length === 0;
      } else {
        return Object.keys(data).length === 0;
      }
    }
    case 'string':
      return data.length === 0;
    default:
      return true;
  }
}

export function clone(inst) {
  switch (inst.constructor) {
    case Array:
      return [].concat(inst);
    case Object:
      return Object.assign({}, inst);
    default:
      return inst;
  }
}

export function keyBy(arr, key) {
  return arr.reduce((obj, item) => {
    if (item[key]) {
      obj[item[key]] = item;
    }
    return obj;
  }, {});
}

export function formatDate(date) {
  return date
    .toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\./g, '/');
}
