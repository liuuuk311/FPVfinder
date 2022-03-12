import { suggestions } from '../stores/suggestionsStore';
import { variables } from '../variables';

export async function getSuggestions(input) {
    if (input.length < 3) {
        suggestions.set([])
        return
    }

    const res = await fetch(`${variables.apiURL}/api/v1/products/autocomplete/?q=${input}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!res.ok) {
        suggestions.set([])
        return
    }

    const data = await res.json()
    suggestions.set(data.results.map(value => value.name))
}
