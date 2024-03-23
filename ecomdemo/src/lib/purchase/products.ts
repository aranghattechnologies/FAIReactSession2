import { http } from "../common/http";

export async function getProducts() {
    let products = await http.get("/products");
    return products;
}

export async function getProductById(id:string) {
    let product = await http.get("/products?id="+id);
    return product[0];
}