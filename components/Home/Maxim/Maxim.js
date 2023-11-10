import styles from "./maxim.module.css";
import Image from "next/image";
import smallTeamImg from "@/public/small-team.jpg";
// src: https://www.pexels.com/photo/a-man-writing-on-a-whiteboard-5257577/

export function Maxim() {
    return (
        <section id={styles.outer}>
            <div id={styles["img-container"]}>
                <Image
                    src={smallTeamImg}
                    alt="A Man Writing on a Whiteboard While Another Points"
                    data-author="User 'Thirdman' on pexels.com"
                    data-source-link="https://www.pexels.com/photo/a-man-writing-on-a-whiteboard-5257577"
                />
            </div>
            <div id={styles.container}>
                <div id={styles.title}>
                    We&apos;re a <span>small team</span>
                </div>
                <p className="text">
                    Because we believe in people,<br />
                    and it is our mission to work<br />
                    with and educate them.
                </p>
                <ul className="text">
                    <li>No corporate branding</li>
                    <li>Firsthand communication</li>
                    <li>1 to 1 support</li>
                    <li>Direct scheduling</li>
                </ul>
            </div>
        </section>
    );
}