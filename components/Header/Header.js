import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { LogoSvg } from "../Svgs";
import Menu from "./Menu";

export default function Header() {
    return (
        <header id={styles.header}>
            <Link href="/">
                <LogoSvg className={styles.logo} />
            </Link>

            <Menu /> 
        </header>
    );
}