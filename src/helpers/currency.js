import { getLocaleFromNavigator } from "svelte-i18n";

export const formatPrice = (price, currency) => {
    var formatter = new Intl.NumberFormat(getLocaleFromNavigator(), {
        style: 'currency',
        currency: currency,
      });
    return formatter.format(price);
}