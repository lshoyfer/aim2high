import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import PathAnimation from "@/components/PathAnimation";
import TeacherButton from "@/components/TeacherButton";
import Ball from "@/components/Ball";

import smallTeamImg from "@/public/small-team.jpg";
// src: https://www.pexels.com/photo/a-man-writing-on-a-whiteboard-5257577/

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
                <div className={styles.globe}>
                    <Ball path={styles.path1} color="#314E6B" />
                    <Ball path={styles.path2} color="#314E6B" />
                    <Ball path={styles.path3} color="#314E6B" />
                    {/*I hate these planet's colors with a passion -- that or ive looked it for one too many hours, I'll figure something out eventually */}
                    <svg width="320" height="320" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3934 14.3934C36.1847 11.5804 43.8153 11.5804 50.6066 14.3934C57.3979 17.2064 62.7936 22.6021 65.6066 29.3934C68.4196 36.1847 68.4196 43.8153 65.6066 50.6066C62.7936 57.3979 57.3979 62.7936 50.6066 65.6066C43.8153 68.4196 36.1847 68.4196 29.3934 65.6066C22.6021 62.7936 17.2064 57.3979 14.3934 50.6066C11.5804 43.8153 11.5804 36.1847 14.3934 29.3934C17.2064 22.6021 22.6021 17.2064 29.3934 14.3934Z" fill="#2f80ed" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.2842 31.9603C21.9713 32.0322 22.655 31.7972 23.1527 31.3182L23.8151 30.6807C24.6389 29.8877 25.7436 29.4538 26.8869 29.4739L26.9241 29.4746L29.0569 31.9205L30.6929 31.7724L31.5542 31.6945C32.055 31.6492 32.5243 31.4306 32.8811 31.0763C33.2543 30.7058 33.7499 30.4842 34.2749 30.4531L35.6285 30.373L37.0537 31.9691C37.8915 32.9075 37.8437 34.3387 36.9452 35.2191C36.4855 35.6694 35.8617 35.9119 35.2186 35.8904L33.1802 35.8221C32.9118 35.8131 32.661 35.9551 32.5305 36.1898C32.361 36.4948 31.9964 36.6331 31.6673 36.5174L28.3573 35.3538C28.0332 35.2399 27.8018 34.9521 27.76 34.6112C27.7032 34.1465 27.3008 33.8022 26.8329 33.8178L23.6534 33.9243C23.4572 33.9308 23.2693 33.845 23.1458 33.6924C22.8932 33.3804 22.4163 33.3833 22.1676 33.6985L20.3798 35.9643C20.0379 36.3975 19.8252 36.9184 19.7662 37.4671L19.5014 39.9276C19.2674 42.1023 20.0348 44.2656 21.5871 45.8066L22.5526 46.7652C23.2604 47.4678 24.2137 47.8674 25.2109 47.8796C27.2858 47.9048 28.9652 49.5741 29.0029 51.6488L29.0309 53.1875C29.0473 54.0924 29.4712 54.9416 30.1844 55.4987C30.8863 56.0469 31.3085 56.8784 31.3369 57.7686L31.4491 61.2842C31.4696 61.9249 31.6837 62.5445 32.0632 63.0612C32.6468 63.8558 33.576 64.3341 34.5616 64.3553C35.4567 64.3746 36.3275 64.0192 36.949 63.3747L38.0714 62.2106C39.3067 60.9295 39.9996 59.2208 40.0054 57.4411L40.0207 52.738C40.0252 51.3395 40.5784 49.9986 41.5612 49.0036L42.5238 48.029C43.2554 47.2884 43.5409 46.2162 43.2745 45.2099C43.1443 44.718 42.8887 44.2683 42.5327 43.9047L38.0444 39.3216C37.7202 38.9905 37.7775 38.4461 38.1636 38.1898C38.4607 37.9926 38.8563 38.0359 39.1037 38.2927L41.4326 40.7102C42.1041 41.4071 43.0185 41.8182 43.9854 41.8577L44.7148 41.8875C45.2928 41.9111 45.8546 41.6931 46.2655 41.2859C47.0875 40.4712 47.0874 39.1424 46.2651 38.3278L43.8646 35.9498C43.6777 35.7646 43.6395 35.4765 43.7718 35.2491C43.9609 34.9239 44.4053 34.8634 44.6745 35.1261L45.7696 36.195C46.0977 36.5153 46.5372 36.6957 46.9957 36.6985L47.9521 36.7042C49.3736 36.7126 50.6912 37.4498 51.4422 38.6567L53.7422 42.3528C53.8361 42.5039 53.9911 42.6066 54.1668 42.6345C54.4713 42.6828 54.7643 42.4975 54.8512 42.2017L55.41 40.299C55.5056 39.9734 55.6583 39.6673 55.8609 39.395L56.3322 38.7615C57.571 37.0965 60.0929 37.1862 61.2103 38.935L61.6394 39.6066C62.0813 40.2983 62.921 40.6231 63.7134 40.409C64.5911 40.1718 65.1731 39.3403 65.0956 38.4344L65.064 38.0656C64.9916 37.22 65.3863 36.4023 66.0932 35.9329L66.7323 35.5085C66.935 35.3739 67.1172 35.2149 67.2758 35.0365C66.9264 33.1132 66.3719 31.2181 65.6123 29.3843C62.7993 22.593 57.4036 17.1973 50.6123 14.3843C50.3461 14.274 50.0786 14.168 49.8099 14.0664C49.1335 14.2947 48.5286 14.7161 48.0769 15.2912L47.7468 15.7116C46.8408 16.8653 45.4571 17.5414 43.9902 17.5472L40.1649 17.5623C38.8864 17.5673 37.6545 17.0821 36.7229 16.2065L36.6017 16.0925C35.8306 15.3678 34.8303 14.9354 33.7741 14.8703C32.4939 14.7914 31.2402 15.2582 30.3233 16.1551L28.7695 17.6749C28.4535 17.9841 28.336 18.4435 28.4647 18.8665C28.715 19.6886 29.73 19.9788 30.3771 19.4133L31.8779 18.1017C32.2104 17.811 32.7176 17.8538 32.9968 18.1959C33.2442 18.499 33.2291 18.9383 32.9616 19.2238L31.6541 20.6186C31.4398 20.8472 31.3081 21.1409 31.2798 21.4529C31.2152 22.1655 30.6256 22.7158 29.9103 22.7312L28.0165 22.7721C27.17 22.7903 26.3584 23.1127 25.73 23.6802L23.5819 25.6204L22.7824 22.6155C22.4605 21.4056 21.4893 20.6096 20.3948 20.4049C19.2008 21.6004 18.116 22.9052 17.1558 24.3038C17.5625 24.9888 18.3001 25.4599 19.1593 25.486L23.5819 25.6204L22.3909 28.1545C22.1249 28.7205 21.6353 29.1503 21.0395 29.3407L20.1406 29.6281C19.6011 29.8006 19.2678 30.3405 19.3555 30.9001C19.4361 31.4147 19.8528 31.8106 20.3709 31.8648L21.2842 31.9603ZM67.2959 44.8333C67.0375 46.2896 66.6617 47.7301 66.1684 49.1405C65.5954 48.8497 65.1048 48.4104 64.7515 47.8621L63.119 45.3281C62.5038 44.3733 63.0463 43.0991 64.1608 42.8807C64.6557 42.7837 65.1674 42.9246 65.5428 43.2613L67.2959 44.8333ZM35.6285 30.373L36.156 29.2469C36.6814 28.1254 37.7709 27.3744 39.006 27.2824L39.7205 27.2292C40.4778 27.1728 41.2092 27.5178 41.6474 28.1381L42.0403 28.6943C42.443 29.2644 42.3597 30.0449 41.8458 30.5172C41.4039 30.9233 40.7511 30.9995 40.2277 30.706L39.6503 30.3823C39.2368 30.1505 38.7618 30.052 38.2902 30.1003L35.6285 30.373ZM43.6395 57.8398C42.9752 57.8398 42.4474 57.2815 42.4847 56.6182L42.5375 55.6795C42.5607 55.2683 42.7075 54.8736 42.9587 54.5471L43.3259 54.0699C43.506 53.8358 43.7805 53.6935 44.0756 53.6812C44.6556 53.657 45.1338 54.1308 45.1151 54.711L45.0703 56.098C45.0606 56.3988 44.9757 56.6923 44.8232 56.9517L44.6367 57.2692C44.429 57.6227 44.0495 57.8398 43.6395 57.8398Z" fill="#6FCF97" />
                    </svg>
                </div>
            </section>

            <section className={styles.maxim}>
                <div className={styles["maxim-img"]}>
                    <Image
                        src={smallTeamImg}
                        // fill
                        // sizes="(max-width: 686px) 100vw, 50vw"
                        // width={500}
                        // height={24}
                        alt="A Man Writing on a Whiteboard While Another Points"
                    />
                </div>
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
                <div className={styles["courses-list"] + " " + styles.text}>
                    <div>
                        <div>Personal</div>
                        <div>College</div>
                        <div>Applications</div>
                        <div>Consulting?</div>
                    </div>
                    <div>
                        <div>Geometry?</div>
                        <div>English?</div>
                        <div>SHSAT?</div>
                        <div>AP Calculus?</div>
                    </div>
                    <div>
                        <div>Programming?</div>
                        <div>Special request?</div>
                        <div>Need help?</div>
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
