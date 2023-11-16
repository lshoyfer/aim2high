import styles from "./consulting.module.css";
import Link from "next/link";

export default function ConsultingPage() {
    return (
        <>
            <h2>College Consulting</h2>
            <p>
                Aim2High&apos;s premier service, <span>Rimma Rashkovan&apos;s</span> college consulting comes with years of admissions
                and teaching experience that will thoroughly guide students through the college applications process.
            </p>
            <h3>
                Included Services
            </h3>
            <ul id={styles.list}>
                <div>
                    <li>Extracurricular activity advising</li>
                    <li>College list</li>
                    <li>FAFSA</li>
                    <li>CSS Profile</li>
                </div>
                <div>
                    <li>Financial goals</li>
                    <li>Academic goals</li>
                    <li>Merit based match</li>
                    <li>Main essay brainstorming</li>
                </div>
                <div>
                    <li>Main essay editing</li>
                    <li>Supplements</li>
                    <li>Common App</li>
                    <li>CUNYfirst app</li>
                    <li>Activity sections</li>
                </div>
                <div>
                    <li>Interview prep</li>
                    <li>Letters of continued interest</li>
                    <li>EA, ED, ED2, REA, SCEA, RD, Honors deadlines</li>
                    <li>College apps that do not participate in the Common App</li>
                </div>
            </ul>
            <h3>
                Price
            </h3>
            <p>
                There is an initial valuation of $250.00 and then $150.00/hr after as needed.
            </p>
            <p>
                Email questions to <span><a href="mailto:aim2highconsulting@gmail.com">aim2highconsulting@gmail.com</a></span>, we&apos;re happy to help!
            </p>
            <p>
                For booking details, see below.
            </p>
            <Link href="/page/book" id={styles.button} className="dramatic-link-button">
                Book
            </Link>
        </>
    ) 
}