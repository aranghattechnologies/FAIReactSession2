import Link from "next/link"
export default function ProductSideNav()
{
    return(
       <div>
            <Link href="/products?type=Beverages">Beverages</Link><br />
            <Link href="/products?type=Bakery">Bakery</Link><br />
            <Link href="/products?type=Electronics">Electronics</Link> <br />
       </div>
    )
}