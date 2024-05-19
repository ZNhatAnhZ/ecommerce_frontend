import axios from 'axios';

export async function getCart(userId) {
    return await axios.get("/api/carts/" + userId);
}

export async function addItemToCart(userId, productDetail, variationEntityIdSet, quantity) {
    return await axios.post("/api/carts/" + userId, {
        variationEntityIdSet: [...variationEntityIdSet].filter(item => item != null),
        productId: productDetail.id,
        quantity: quantity
    });
}