"use client";
import styles from "./buttons.module.css";
import { useState, useEffect } from "react";
import { CopySvg, EmailSvg } from "@/components/Svgs";

export default function Buttons() {
    const [isCopied, setIsCopied] = useState(false);

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("aim2highconsulting@gmail.com");
            setIsCopied(true);
        } catch (e) {
            console.error("Unable to copy text to clipboard", e);
        }
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => setIsCopied(false), 500);
        }
    }, [isCopied]);

    return (
        <>
            <button id={styles.copy} className="dramatic-button" onClick={copyEmailToClipboard}>
                <CopySvg className={isCopied ? styles.copied : null} />
            </button>
            <a id={styles.compose} className="dramatic-link-button" href="mailto:aim2highconsulting@gmail.com">
                <EmailSvg />
            </a>
        </>
    )
}