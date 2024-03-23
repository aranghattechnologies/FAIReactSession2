import { getSession } from "@/lib/access/auth";
import { isUserLoggedIn } from "@/lib/access/util"
import Link from "next/link"

export default async function Nav() {

    const isLoggedIn = await isUserLoggedIn();
    const user = await getSession();

    return(
        <nav className="nav navbar navbar-expand navbar-light bg-light d-flex align-items-center">
            <Link href="/" className="navbar-brand">MyLittleStore</Link>
            <div className="container-fluid">
                <div className="col"></div>
                <div className="col-auto">
                    {isLoggedIn ? 
                     <ul className="navbar-nav">
                        <li className="nav-item d-flex align-items-center">
                            Welcome <strong className="ms-2">{user?.name}</strong>
                        </li>
                        <li className="nav-item d-flex align-items-center px-4">
                            |
                        </li>
                        <li className="nav-item">
                            <Link href="/orders" className="nav-link">My Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/logout" className="nav-link">Logout</Link>
                        </li>
                     </ul>
                    :
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/register" className="nav-link">Register</Link>
                        </li>
                    </ul>
                 }
                </div>
            </div>
        </nav>
    )
}