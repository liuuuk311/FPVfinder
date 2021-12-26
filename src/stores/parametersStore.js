import { writable } from 'svelte/store';
import { browser } from '$app/env'

export const keywords = writable("");
export const page = writable(1);
export const ordering = writable("relevance");

export const updatedFilters = writable(false);

let filterPreferences = {availability: undefined, continent: undefined, country: undefined}
if (browser) {
    filterPreferences = JSON.parse(localStorage.getItem("filterPreferences")) || filterPreferences;
}

export const availabilityFilter = writable(filterPreferences.availability);
export const continentFilter = writable(filterPreferences.continent);
export const countryFilter = writable(filterPreferences.country);

if (browser) {
    availabilityFilter.subscribe(value => {
        localStorage.setItem(
            "filterPreferences", 
            JSON.stringify(
                {...JSON.parse(localStorage.getItem("filterPreferences")), availability: value }
            )
        );
    });
    continentFilter.subscribe(value => {
        localStorage.setItem(
            "filterPreferences", 
            JSON.stringify(
                {...JSON.parse(localStorage.getItem("filterPreferences")), continent: value }
            )
        );
    });
    countryFilter.subscribe(value => {
        localStorage.setItem(
            "filterPreferences", 
            JSON.stringify(
                {...JSON.parse(localStorage.getItem("filterPreferences")), country: value }
            )
        );
    });
}