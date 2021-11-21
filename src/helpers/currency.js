import {getLang} from './language.js';

export const formatPrice = (price, currency) => {
    var formatter = new Intl.NumberFormat(getLang(), {
        style: 'currency',
        currency: currency,
      });
    return formatter.format(price);
}