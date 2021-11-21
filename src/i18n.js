import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('it', () => import('./locales/it.json'));
// locales are not available yet

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
