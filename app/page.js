import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import girlImg from "@/public/student-girl.jpg";
// src: https://www.pexels.com/photo/woman-in-blue-long-sleeve-shirt-holding-white-and-blue-book-5211432/
import PathAnimation from "@/components/PathAnimation";
import TeacherButton from "@/components/TeacherButton";

export default function Home() {
    return (
        <>
            <section className={styles.intro}>
                <div className={styles["intro-container"]}>
                    <div className={`${styles.text} ${styles["intro-motto"]}`}>
                        <span>Tutoring,</span>
                        <br />
                        <span>Reimagined</span>
                    </div>
                    <div className={`${styles.text} ${styles["intro-blurb"]}`}>
                        Our diverse and experienced<br />
                        platform of teachers will provide<br />
                        the educational resources and <br />
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
                            />

                        </div>
                    </div>
                </div>
            </section>
            {/* 
            <Image
                className={styles["girl-img"]}
                src={girlImg}
                alt="Student Girl in Blue Long Sleeve Shirt Holding White and Blue Book"
                sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            /> */}

            <section className={`${styles.text} ${styles["teacher-info"]}`}>
                <div className={styles["teacher-info-container"]}>
                    <div className={styles["teacher-info-header-container"]}>
                        <div className={styles["teacher-info-header"]}>
                            <div>Real teachers</div>
                            <div>with</div>
                            <div>Real experience.</div>
                        </div>
                        <PathAnimation type="mobile" svgClassName={styles["mobile-svg"]} pathsClassName={styles["path-animation"]} />
                    </div>
                    <div className={styles["teacher-info-caption"]}>
                        Learn from our team of NYC Public<br />
                        High School teachers, or opt for a<br />
                        first-class field coaching expert.
                    </div>
                </div>
                <PathAnimation type="desktop" svgClassName={styles["desktop-svg"]} pathsClassName={styles["path-animation"]} />
                <TeacherButton />
            </section>
        </>
    )
}
