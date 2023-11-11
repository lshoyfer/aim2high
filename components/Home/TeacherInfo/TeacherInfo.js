import styles from "./teacher-info.module.css";
import PathAnimation from "./PathAnimation";
import Link from "next/link";

export function TeacherInfo() {
    return (
        <section id={styles.outer} className="text">

            <div id={styles.container}>
                <div id={styles["header-container"]}>
                    <div id={styles.header}>
                        <div>Real teachers</div>
                        <div>with</div>
                        <div>Real experience</div>
                    </div>
                    <PathAnimation type="mobile" svgId={styles["mobile-svg"]} pathsClassName={styles["path-animation"]} />
                </div>
                <div id={styles.caption}>
                    Learn from our team of NYC Public<br />
                    High School teachers, or opt for a<br />
                    first-class field coaching expert.
                </div>
            </div>

            <PathAnimation type="desktop" svgId={styles["desktop-svg"]} pathsClassName={styles["path-animation"]} />

            <Link className="dramatic-link-button" href="/teachers">
                Meet the Team
            </Link>

        </section>
    );
}