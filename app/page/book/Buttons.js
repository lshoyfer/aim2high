"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Buttons() {
    const [isCopied, setIsCopied] = useState(false);

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("aim2highconsulting@gmail.com");
            setIsCopied(true);
        } catch (e) {
            console.log("Unable to copy text to clipboard", e);
        }
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => setIsCopied(false), 2000);
        }
    }, [isCopied]);

    return (
        <>
            <div className={styles.buttons}>
                {/* <Link href="https://www.google.com/forms/about">Form Link</Link> */}
                <button onClick={copyEmailToClipboard}>Copy Email</button>
                <Link href="mailto:aim2highconsulting@gmail.com">Compose Email</Link>
            </div>
            {isCopied && <div className={styles["copied-popup"]}>Copied</div>}
        </>
    )
}