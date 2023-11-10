import Link from "next/link";
import Image from "next/image";
import { LogoSvg } from "@/components/Svgs";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <Link href="/">
                <LogoSvg id={styles.logo}/>
            </Link>
            <div>United States</div>
            <div>English</div>
            <div id={styles.links}>
                <Link href="/page/book">Book </Link>
                <Link href="/teachers">Teachers </Link>
                <Link href="/blog">Blog </Link>
                <Link href="/page/contact">Contact </Link>
            </div>
        </footer>
    );
}