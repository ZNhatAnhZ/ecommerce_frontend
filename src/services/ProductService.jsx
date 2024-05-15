import axios from 'axios';

export async function getAllProducts(page = 0, size = 8, sort = "id") {
    return ( await axios.get("/api/products", {
        params: {
            page: page,
            size: size,
            sort: sort
        }
    })).data;
}

export async function getAProduct(id) {
    return (await axios.get(`/api/products/${id}`)).data;
}