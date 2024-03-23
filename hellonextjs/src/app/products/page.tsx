import Link from "next/link"

export default function ProductsPage() {
   
    return(
        <div>
            <h1>Products</h1>
            <p>Our products are the best in the market</p>
            <ul>
                <li>
                    <Link href="/products/tea/10">Tea</Link>
                </li>
                <li>
                    <Link href="/products/coffee/20">Coffee</Link>
                </li>
                <li>
                    <Link href="/products/sugar/5">Sugar</Link>
                </li>
                
            </ul>

            <ul>
                <li>
                    <Link href="/products/tea/10/icici10">Tea</Link>
                </li>
                <li>
                    <Link href="/products/coffee/20/icici10/hdfc20">Coffee</Link>
                </li>
                <li>
                    <Link href="/products/sugar/5">Sugar</Link>
                </li>
                
            </ul>
        </div>
    )
}