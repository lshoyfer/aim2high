import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <Image
                src="./logo.svg"
                width={142}
                height={64}
                alt="logo"
                className="logo"
            />
            <div>United States</div>
            <div>English</div>
            <div className="links">
                &bull; <Link href="/page/book">Book </Link>
                &bull; <Link href="/teachers">Teachers </Link>
                &bull; <Link href="/blog">Blog </Link>
                &bull; <Link href="/page/contact">Contact </Link> &bull;
            </div>
        </footer>
    );
}