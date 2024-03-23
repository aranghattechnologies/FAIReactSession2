export default function Products({searchParams}: {searchParams: {type :string}}){

    let products = [
        {id: 1, name: 'Tea', price: 100,Category: 'Beverages'},
        {id: 2, name: 'Coffee', price: 200,Category: 'Beverages'},
        {id: 3, name: 'Milk', price: 300,Category: 'Beverages'},
        {id: 4, name: 'Bread', price: 400,Category: 'Bakery'},
        {id: 5, name: 'Cake', price: 500,Category: 'Bakery'},
        {id: 6, name: 'Mobile', price: 600,Category: 'Electronics'},
        {id: 7, name: 'Laptop', price: 700,Category: 'Electronics'},
    ]

    function filterProducts(){
        if(searchParams && searchParams.type)
             return products.filter(product => product.Category === searchParams.type);
            
        return products;
    }

    return (
        <div>
            <h1>Products</h1>
            {filterProducts().map((product, index) => {
                return (
                    <div key={index}>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.Category}</p>
                    </div>
                )
            })}
        </div>
    )
}