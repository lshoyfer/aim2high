import Link from "next/link";
import styles from "./contact.module.css";
import Buttons from "./Buttons";

export default function BookPage() {
    return (
        <>
            <h2> Contact </h2>
            <p>
                Email us below with any questions you may have about one our services such as
                pricing, scheduling, payment, and more.
            </p>
            <p>
                If you&apos;re currently with one of our tutors
                and have a question for them, it may be better to
                try their email first, which <span><Link href="/teachers" style={{textDecoration: "underline"}}>can be found here</Link></span>.
            </p>
            <p>
                On an average business day you should expect a response within the hour. We&apos;re a small business, so please be patient. Thank you.
            </p>
            <address id={styles.address}>
                <span style={{ fontSize: "1.25rem" }}>aim2highconsulting@gmail.com</span>
                <Buttons />
            </address>
        </>
    )
}