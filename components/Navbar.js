import Link from "next/link";
import styles from "./navbar.module.css";
import { headers } from "next/headers";

const Navbar = ()=>{
    return (
        <header>
            <nav>
                <p>
                    Next.js
                </p>
                <ul>
                    <Link href='/'>
                        <li>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li>About</li>
                    </Link>
                    <Link href='/contact'>
                        <li>
                            contact
                        </li>
                    </Link>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar;