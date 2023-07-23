import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
    return (
        <section className={styles.intro}>
            <div className={styles["intro-motto"]}>
                <span>Tutoring,</span>
                <br />
                <span>Reimagined</span>
            </div>
            <div className={styles["intro-blurb"]}>
                Our diverse and experienced<br/>
                platform of teachers will provide<br/>
                the educational resources and <br/>
                guidance of your dreams.
            </div>
            <div className={styles["intro-nav"]}>
                <Link href="/book">Book</Link>
                <div>
                    Free Lessons
                    <Image
                        src="./link.svg"
                        width={24}
                        height={24}
                        alt="link icon"
                        priority
                    />

                </div>
            </div>
        </section>
    )
}
