import Image from "next/image";
import styles from "./page.module.css";
import { getProducts } from "@/lib/purchase/products";
import Link from "next/link";

export default async function Home() {

  let products = await getProducts();

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Link href={"/products/" + product.id} className="card h-100 text-decoration-none shadow">
              <img src={product.thumbnail} className="card-img-top h-50 " alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price} <span className="text-danger">{product.discount} OFF</span></p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
