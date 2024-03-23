import { http } from "@/lib/common/http";

export async function GET(req:Request){
    let products = await http.get("/products");
    return Response.json(products);
}