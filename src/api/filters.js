import { continentsOptions, countriesOptions } from '../stores/filters';
import { getLocaleFromNavigator } from "svelte-i18n";
import { variables } from '../variables';

export async function getContinents() {
    const res = await fetch(`${variables.apiURL}/api/v1/continents/`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': getLocaleFromNavigator(),
        }
    });
    if (!res.ok) {
        continentsOptions.set([])
        return
    }

    const data = await res.json()
    continentsOptions.set(data.results)
}

export async function getCountries(continent) {
    const query = continent !== undefined && continent !== "any" ? `?continent=${continent}` : ''
    const res = await fetch(`${variables.apiURL}/api/v1/countries/${query}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': getLocaleFromNavigator(),
        }
    });
    if (!res.ok) {
        countriesOptions.set([])
        return
    }

    const data = await res.json()
    countriesOptions.set(data.results)
}