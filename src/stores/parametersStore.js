import { writable } from 'svelte/store';


export const keywords = writable("");
export const page = writable(1);
export const availabilityFilter = writable(undefined);
export const ordering = writable("relevance")