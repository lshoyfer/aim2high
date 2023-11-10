import styles from "./layout.module.css";

// for non blogs that are simple <p/> text content
export default function PageLayout({ children }) {
    return (
        <div id={styles.page}>
            <article id={styles.content}>
                {children}
            </article>
        </div>
    );
}