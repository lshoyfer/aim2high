"use client";
import styles from "./buttons.module.css";
import { useState, useEffect } from "react";

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
            setTimeout(() => setIsCopied(false), 2000);
        }
    }, [isCopied]);

    return (
        <>
            <div id={styles.container}>
                <div id={styles.buttons}>
                    <button className="dramatic-button" onClick={copyEmailToClipboard}>Copy Email</button>
                    <a className="dramatic-link-button" href="mailto:aim2highconsulting@gmail.com">Compose Email</a>
                </div>
                <a id={styles["form-button"]} className="dramatic-link-button" href="https://www.google.com/forms/about/">
                    Form
                </a>
            </div>
            {isCopied && <div id={styles["copied-popup"]}>Copied</div>}
        </>
    )
}