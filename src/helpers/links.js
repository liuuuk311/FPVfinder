import { variables } from '../variables';

export async function trackAndOpenLink(product, loadedAt, search_query, page_number) {

    console.log("clicked")
    var productURL = new URL(product.link)
    productURL.searchParams.append('utm_source', variables.utmSource)
    productURL.searchParams.append('utm_medium', variables.utmMedium)
    productURL.searchParams.append('utm_campaign', variables.utmCampaign)

    window.open(productURL, '_blank').focus();
    await fetch(`${variables.apiURL}/api/v1/products/${product.id}/click/`, {
        method: 'POST',
        body: JSON.stringify({
            clicked_after_seconds: (new Date().getTime() - loadedAt) / 1000,
            search_query: search_query,
            page: page_number
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}