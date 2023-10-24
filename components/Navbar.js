"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import logoSvg from "@/public/logo.svg";
import menuSvg from "@/public/menu.svg"

export default function Navbar() {
    const [menuHidden, setMenuHidden] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenuHidden = () => {
        setMenuHidden(!menuHidden);
    }

    // Upon navigation reset menu state
    useEffect(() => {
        setMenuHidden(true);
    }, [pathname])

    return (
        <>
            <header>
                <Image
                        src={logoSvg}
                        // src="./logo.svg"
                        width={142}
                        height={64}
                        alt="logo"
                        onClick={() => router.push('/')}
                        priority
                />

                <nav className="menubar-button" onClick={toggleMenuHidden}>
                    <Image 
                        // src="./menu.svg"
                        src={menuSvg}
                        width={24} 
                        height={24} 
                        alt="menubar icon"
                    />
                </nav>
            </header>

            <nav className={"menu" + (menuHidden ? " hidden" : "")}>
                <ul>
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
                </ul>
            </nav>
        </>
    );
}