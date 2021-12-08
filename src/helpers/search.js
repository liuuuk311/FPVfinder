import { goto } from '$app/navigation';
import { suggestions } from '../stores/suggestionsStore.js';
import { keywords } from '../stores/parametersStore.js';

export const setKeywordsAndSearch = (input) => {
    keywords.set(input);
    suggestions.set([]);
    goto(`/search/?q=${input}`);
}