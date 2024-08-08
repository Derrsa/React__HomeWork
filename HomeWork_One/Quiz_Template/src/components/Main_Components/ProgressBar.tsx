import styles from "./ProgressBar.module.css"
export function ProgressBar() {
    return(
        <div className={styles.main__wrapper}>
            <div className={styles.main__bar}>
                <span className={styles.main__progress}></span>
            </div>
        </div>
    )
}