import styles from "./inline-svg.module.css";
export function InlineSvg({ children }) {
    return (
        <span className={styles.outer}>
            &nbsp;{children}
        </span>
    );
}