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
                &bull; <Link href="/book">Book </Link>
                &bull; <Link href="/book">Teachers </Link>
                &bull; <Link href="/book">About </Link>
                &bull; <Link href="/book">Blog </Link>
                &bull; <Link href="/book">Contact </Link> &bull;
            </div>
        </footer>
    );
}