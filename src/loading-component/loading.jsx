import styles from "./loading.module.css"

function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>Loading...</div>
        </div>
    )
}

export default Loading;