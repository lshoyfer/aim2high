import styles from "./courses.module.css";
export function Courses() {
    return (
        <section>
            <div id={styles.list} className="text">
                <div>
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
    );
}