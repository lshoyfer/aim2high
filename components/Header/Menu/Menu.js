"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../navbar.module.css";
import { MenuSvg, LogoSvg, CloseSvg } from "@/components/Svgs";

export default function Menu() {
    const [menuHidden, setMenuHidden] = useState(true);
    const pathname = usePathname();

    const toggleMenuHidden = () => {
        setMenuHidden(!menuHidden);
    }

    // Upon navigation reset menu state
    useEffect(() => {
        setMenuHidden(true);
    }, [pathname]);

    return (
        <nav id={styles.container}>
            <button id={styles["header-button"]} className={styles["svg-button"]} onClick={toggleMenuHidden}>
                <MenuSvg className={styles.svg} />
            </button>
            <div
                id={styles.popup}
                className={menuHidden ? styles.hidden : styles.show}
            >
                <Link href="/">
                    <LogoSvg className={styles.logo} />
                </Link>
                <button id={styles["popup-button"]} className={styles["svg-button"]} onClick={toggleMenuHidden}>
                    <CloseSvg className={styles.svg} />
                </button>
                <menu>
                    <li>
                        <Link href="/page/book">Book</Link> 
                    </li>
                    <li>
                        <Link href="/teachers">Teachers</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link> 
                    </li>
                    <li>
                        <Link href="/page/contact">Contact</Link>
                    </li>
                    <li id={styles["consulting-link"]}>
                        <Link className="dramatic-link-button" href="/page/consulting">Consulting</Link>
                    </li>
                </menu>
            </div>
            
        </nav>
    );
}