import { writable } from "svelte/store";
import { browser } from '$app/env'

let storedTheme = 'light';
let showCookieBanner = true;
let showTutorial = true;
if (browser) {
    storedTheme = localStorage.getItem("theme") || storedTheme;
    showCookieBanner = localStorage.getItem("showCookieBanner") || showCookieBanner;
    showTutorial = localStorage.getItem("showTutorial") || showTutorial;
}

export const theme = writable(storedTheme);
export const cookie = writable(showCookieBanner);
export const tutorial = writable(showTutorial);

if (browser) {
    theme.subscribe(value => {
        localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
    });
    cookie.subscribe(value => {
        localStorage.setItem("showCookieBanner", value);
    });
    tutorial.subscribe(value => {
        localStorage.setItem("showTutorial", value);
    });
}

