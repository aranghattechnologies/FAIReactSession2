import { getSession } from "../access/auth";
import { http } from "../common/http";
import { getProductById } from "./products";

export async function  createOrder(id:string,quantity:number) {
    
    let user = await getSession();
    let product = await getProductById(id);
    if(user)
    {
        let order = {
            userId : user.id,
            productId : id,
            quantity : quantity,
            price : Number(product.price) * quantity,
            status : "Pending",
            date : new Date().toISOString(),
            name : product.title
        };

        //Send the order object to the server
        await http.post("/orders", order);
    }
    else
        throw Error("User not logged in",{cause : "User not logged in"});

}

export async function getOrders() {
    let user = await getSession();
    if(user)
    {
        let orders = await http.get("/orders?userId="+user.id);
        return orders;
    }
    else
        throw Error("User not logged in",{cause : "User not logged in"});
}