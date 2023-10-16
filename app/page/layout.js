import styles from "./page.module.css";

// for non blogs that are simple <p/> text content
export default function PageLayout({ children }) {
    return (
        <div className={styles.page}>
            <article className={styles.content}>
                {children}
            </article>
        </div>
    );
}