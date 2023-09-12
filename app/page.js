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

            <section className={styles.maxim}>
                <div className={styles["maxim-container"]}>
                    <div className={styles["maxim-title"]}>
                        We&apos;re a <span>small team</span>
                    </div>
                    <p className={styles.text}>
                        Because we believe in people,<br />
                        and it is our mission to work<br />
                        with and educate them.
                    </p>
                    <ul className={styles.text}>
                        <li>No corporate branding</li>
                        <li>Firsthand communication</li> 
                        <li>1 to 1 support</li> 
                        <li>Direct scheduling</li> 
                        <li>No BS.</li> 
                    </ul>
                </div>
            </section>

            <section className={styles.courses}>
                {/* <svg className={styles["courses-svg"]} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6718 37.5573C20.4252 38.3273 20.292 39.1481 20.292 40.0001V49.4416C20.292 53.2551 22.9837 56.5384 26.7231 57.2863L38.7231 59.6863C39.7588 59.8934 40.8252 59.8934 41.8609 59.6863L53.8609 57.2863C57.6003 56.5384 60.292 53.2551 60.292 49.4416V40.0001C60.292 39.0832 60.1378 38.2024 59.8538 37.3822L40.3165 43.8947C40.1112 43.9631 39.8893 43.9631 39.684 43.8947L20.6718 37.5573Z" stroke="#314E6B" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M39.6839 20.1054C39.8892 20.037 40.1111 20.037 40.3164 20.1054L73.1541 31.0513C74.0658 31.3552 74.0658 32.6448 73.1541 32.9487L40.3164 43.8946C40.1111 43.963 39.8892 43.963 39.6839 43.8946L6.84621 32.9487C5.93452 32.6448 5.93452 31.3552 6.84621 31.0513L39.6839 20.1054Z" stroke="#314E6B" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M39 31L16.077 37.5494C13.0718 38.408 11 41.1547 11 44.2801V50.5M11 50.5L10 62M11 50.5L12 62" stroke="#314E6B" stroke-linecap="round" stroke-linejoin="round" />
                </svg> */}
                <div className={styles["courses-list"] + " " + styles.text}>
                    <div>Personal</div>
                    <div>College</div>
                    <div>Applications</div>
                    <div>Consulting?</div>
                    <div>Geometry?</div>
                    <div>English?</div>
                    <div>SHSAT?</div>
                    <div>AP Calculus?</div>
                    <div>Programming?</div>
                    <div>Special request?</div>
                    <div>Need help?</div>
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
