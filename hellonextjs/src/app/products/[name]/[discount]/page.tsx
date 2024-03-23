//http://localhost:3000/products/tea/10
//http://localhost:3000/products?name=coffee&discount=20
//http://localhost:3000/products/coffee/20
//http://localhost:3000/products/sugar/15


export default function ProductDetails({params}:{params : {name:string,discount:number}}){
    return (
        <div>
            <h1>{params.name}</h1>
            <p>Product details</p>
            <h4>You have a discount of {params.discount}</h4>
        </div>
    )
}