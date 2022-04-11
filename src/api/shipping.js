import { variables } from '../variables';

export async function createShippingMethodSuggestion(storeId, shipping) {
    const response = await fetch(`${variables.apiURL}/api/v1/shipping_methods/${storeId}/suggest/`, {
        method: 'POST',
        body: JSON.stringify({
            "name": shipping.name,
            "price": shipping.price,
            "is_weight_dependent": shipping.isWeightDependent,
            "min_price_shipping_condition": shipping.minPriceShippingCondition,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });
}