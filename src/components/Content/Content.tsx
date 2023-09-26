import React from "react"
import styles from "./Content.module.scss"

function Content() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>Центральний контент</h2>
                <p>Довільний контент тут.</p>
            </div>
        </div>
    )
}

export default Content
