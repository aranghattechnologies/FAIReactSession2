import { getOrders } from "@/lib/purchase/orders"

export default async function Orders(){

    let orders = await getOrders();

    return(
        <div className="container">
            <h2 className="mt-4">My Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order:any) => {
                        return(
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td>{order.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}