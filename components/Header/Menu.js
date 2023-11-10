"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { MenuSvg, LogoSvg, CloseSvg } from "@/components/Svgs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useReducer, createContext, useContext } from "react";

// ------ Start Menu State Boilerplate ------
const MenuContext = createContext(null);

const menuReducer = (state, action) => {
    switch (action) {
        case "menuToggle":
            return {
                transition: true,
                hidden: !state.hidden
            }
        case "menuHide":
            return {
                transition: true,
                hidden: true
            }

        // Upon navigation hide menu & make it
        // pop out of existence instead of transition
        case "navigation":
            return {
                transition: false,
                hidden: true
            }
        default:
            console.error(`Unknown Action Type "${action}" in Menu. Contact page owner.`);
            return state;
    }
}
const createMenuState = () => ({ transition: true, hidden: true });
// ------ End Menu State Boilerplate ------

export default function Menu() {
    const [state , dispatch] = useReducer(menuReducer, null, createMenuState);
    const pathname = usePathname();
    const router = useRouter();

    const handleSameRoute = (route) => {
        if (pathname === route)
            dispatch("menuHide");
    }
    const toggleMenu = () => {
        dispatch("menuToggle");
    }

    useEffect(() => {
        dispatch("navigation")
    }, [pathname]);

    return (
        <MenuContext.Provider value={ handleSameRoute }>
            <nav id={styles.container}>
                <button id={styles["header-button"]} className={styles["svg-button"]} onClick={toggleMenu}>
                    <MenuSvg className={styles.svg} />
                </button>
                <div
                    id={styles.popup}
                    className={`${state.hidden ? styles.hidden : styles.show} ${state.transition ? styles.transition : ""}`}
                >
                    <SmartLink href="/">
                        <LogoSvg className={styles.logo} />
                    </SmartLink>
                    <button id={styles["popup-button"]} className={styles["svg-button"]} onClick={toggleMenu}>
                        <CloseSvg className={styles.svg} />
                    </button>
                    <menu>
                        <li>
                            <SmartLink href="/page/book">Book</SmartLink> 
                        </li>
                        <li>
                            <SmartLink href="/teachers">Teachers</SmartLink>
                        </li>
                        <li>
                            <SmartLink href="/blog">Blog</SmartLink> 
                        </li>
                        <li>
                            <SmartLink href="/page/contact">Contact</SmartLink>
                        </li>
                        <li id={styles["consulting-link"]}>
                            <SmartLink className="dramatic-link-button" href="/page/consulting">Consulting</SmartLink>
                        </li>
                    </menu>
                </div>
            </nav>
        </MenuContext.Provider>
    );
}

// Handles menu business logic if the  link navigates to the current route
function SmartLink({ href, className, id, children }) {
    const handleSameRoute = useContext(MenuContext);
    return (
        <Link href={href} onClick={() => handleSameRoute(href)} className={className} id={id}>
            {children}
        </Link>
    );
}