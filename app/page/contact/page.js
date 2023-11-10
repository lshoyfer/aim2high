import Link from "next/link";
import styles from "./contact.module.css";

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
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 36.3418V40.1796L12 54.1796L12 68.1796C12 70.3887 13.7909 72.1796 16 72.1796H64C66.2091 72.1796 68 70.3887 68 68.1796V54.1796V40.1796V36.3418C68 37.5095 67.4897 38.6189 66.6032 39.3788L45.2063 57.719C42.2104 60.2869 37.7896 60.2869 34.7937 57.719L13.3968 39.3788C12.5102 38.6189 12 37.5095 12 36.3418Z" fill="#56CCF2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68 34.0005V33.985V31.8402C68 30.6725 67.4897 29.5631 66.6032 28.8032L61 24.0005L61 44.0005L66.6032 39.1978C67.4897 38.4378 68 37.3284 68 36.1607V34.016V34.0005ZM19 44.0005L13.3968 39.1978C12.5102 38.4378 12 37.3284 12 36.1607L12 34.016V34.0005V33.985V31.8402C12 30.6725 12.5102 29.5631 13.3968 28.8032L19 24.0005L19 44.0005ZM28.3333 16.0005L51.6666 16.0005L45.2063 10.4631C42.2104 7.89513 37.7896 7.89513 34.7937 10.4631L28.3333 16.0005Z" fill="#2F80ED" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.002 44.1817L61.002 21C61.002 18.2386 58.7634 16 56.002 16L24.002 16C21.2405 16 19.002 18.2386 19.002 21L19.002 44.1817L34.7956 57.7191C37.7915 60.287 42.2124 60.287 45.2083 57.7191L61.002 44.1817Z" fill="#F2F2F2" />
                    <path d="M28.002 26.0005C26.8974 26.0005 26.002 26.8959 26.002 28.0005C26.002 29.1051 26.8974 30.0005 28.002 30.0005V26.0005ZM44.002 30.0005C45.1065 30.0005 46.002 29.1051 46.002 28.0005C46.002 26.8959 45.1065 26.0005 44.002 26.0005V30.0005ZM28.002 34.0005C26.8974 34.0005 26.002 34.8959 26.002 36.0005C26.002 37.1051 26.8974 38.0005 28.002 38.0005V34.0005ZM52.002 38.0005C53.1065 38.0005 54.002 37.1051 54.002 36.0005C54.002 34.8959 53.1065 34.0005 52.002 34.0005V38.0005ZM28.002 42.0005C26.8974 42.0005 26.002 42.8959 26.002 44.0005C26.002 45.1051 26.8974 46.0005 28.002 46.0005V42.0005ZM44.002 46.0005C45.1065 46.0005 46.002 45.1051 46.002 44.0005C46.002 42.8959 45.1065 42.0005 44.002 42.0005V46.0005ZM28.002 30.0005L44.002 30.0005V26.0005L28.002 26.0005V30.0005ZM28.002 38.0005H52.002V34.0005H28.002V38.0005ZM28.002 46.0005H44.002V42.0005H28.002V46.0005Z" fill="#4F4F4F" />
                </svg>
                <span><a href="mailto:aim2highconsulting@gmail.com">aim2highconsulting@gmail.com</a></span>
            </address>
        </>
    )
}