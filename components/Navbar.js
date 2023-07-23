"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ children }) {
    const [menuHidden, setMenuHidden] = useState(true);

    const toggleMenuHidden = () => {
        setMenuHidden(!menuHidden);
    }

    return (
        <>
            <header>
                {children}

                <nav className="menubar-button" onClick={toggleMenuHidden}>
                    <Image 
                        src="./menu.svg"
                        width={32} 
                        height={32} 
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