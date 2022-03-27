import { variables } from '../variables';
import { getLocaleFromNavigator } from "svelte-i18n";

export async function getBestProducts() {
    const response = await fetch(`${variables.apiURL}/api/v1/products/best/`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': getLocaleFromNavigator(),
        }
    });
    const data = await response.json();
    return response.ok ? data : { error: res };
}

export async function getBestBrands() {
    const response = await fetch(`${variables.apiURL}/api/v1/brands/best/`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': getLocaleFromNavigator(),
        }
    });
    const data = await response.json();
    return response.ok ? data : { error: res };
}