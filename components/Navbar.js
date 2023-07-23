"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

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
                        src="./logo.svg"
                        width={142}
                        height={64}
                        alt="logo"
                        className="logo"
                        onClick={() => router.push('/')}
                        priority
                />

                <nav className="menubar-button" onClick={toggleMenuHidden}>
                    <Image 
                        src="./menu.svg"
                        width={24} 
                        height={24} 
                        alt="menubar icon"
                        priority
                    />
                </nav>
            </header>

            <nav className={"menu" + (menuHidden ? " hidden" : "")}>
                <ul>
                    <li>
                        <Link href="/book">Book</Link> 
                    </li>
                    <li>
                        <Link href="/teachers">Teachers</Link> 
                    </li>
                    <li>
                        <Link href="/about">About</Link> 
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link> 
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link> 
                    </li>
                </ul>
            </nav>
        </>
    );
}