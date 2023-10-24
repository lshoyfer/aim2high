import Link from "next/link";
import Image from "next/image";
import svgLogo from "@/public/logo.svg";

export default function Footer() {
    return (
        <footer>
            <Image
                // src="./logo.svg"
                src={svgLogo}
                width={142}
                height={64}
                alt="logo"
                className="logo"
            />
            <div>United States</div>
            <div>English</div>
            <div className="links">
                <Link href="/page/book">Book </Link>
                <Link href="/teachers">Teachers </Link>
                <Link href="/blog">Blog </Link>
                <Link href="/page/contact">Contact </Link>
            </div>
        </footer>
    );
}