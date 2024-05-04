import axios from 'axios';

export async function createAnOrder(page = 0, size = 8, sort = "id") {
    return ( await axios.get("/api/products", {
        params: {
            page: page,
            size: size,
            sort: sort
        }
    })).data;
}