import axios from 'axios';

export async function getCart(userId) {
    return axios.get("/api/carts/" + userId);
}

export async function addItemToCart(userId, itemEntityId, sku, quantity) {
    return await axios.post("/api/carts" + userId, {
        itemEntityId: itemEntityId,
        sku: sku,
        quantity: quantity
    });
}