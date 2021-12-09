import { writable } from "svelte/store";
import { browser } from '$app/env'

let storedTheme = 'light';
let showCookieBanner = true;
if (browser) {
    storedTheme = localStorage.getItem("theme") || storedTheme;
    showCookieBanner = localStorage.getItem("showCookieBanner") || showCookieBanner;
}

export const theme = writable(storedTheme);
export const cookie = writable(showCookieBanner);

if (browser) {
    theme.subscribe(value => {
        localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
    });
    cookie.subscribe(value => {
        localStorage.setItem("showCookieBanner", value);
    });
}

