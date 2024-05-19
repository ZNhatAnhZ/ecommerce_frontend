import axios from 'axios';

export async function createAnOrderForTheCartWithUser(cart, user) {
    return await axios.post("/api/orders", {
        orderCreateType: "WITH_USERID",
        userId: user.id,
        itemList: cart.content.map(item => {
            return {
                cartItemId: item.id,
                quantity: item.quantity,
                itemEntityId: item.itemEntity.id,
                itemEntitySku: item.sku
            }
        })
    });
}

export async function createAnOrderForTheCartWithEmail(cart, email) {
    return await axios.post("/api/orders", {
        orderCreateType: "WITH_EMAIL",
        email: email,
        itemList: cart.content.map(item => {
            return {
                cartItemId: item.id,
                quantity: item.quantity,
                itemEntityId: item.itemEntity.id,
                itemEntitySku: item.sku
            }
        })
    });
}

export async function captureOrder(data, orderDetail, user) {
    return await axios.post("/api/orders/" + orderDetail.id + "/confirm", {
        email: orderDetail.email,
        userId: user.id,
        paypalOrderId: data.orderID,
        paymentId: data.paymentID,
        payerId: data.payerID,
        paymentSource: data.paymentSource,
    });
}