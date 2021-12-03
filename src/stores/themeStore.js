import { writable } from "svelte/store";
import { browser } from '$app/env'

let storedTheme = 'light';
if (browser) {
    storedTheme = localStorage.getItem("theme") || storedTheme;
}

export const theme = writable(storedTheme);

if (browser) {
    theme.subscribe(value => {
        localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
    });
}
