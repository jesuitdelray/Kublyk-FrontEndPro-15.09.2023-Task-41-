import React from "react"
import styles from "./Content.module.scss"

function Content() {
    return (
        <main className={styles.wrapper}>
            <h2>Центральний контент</h2>
            <p>Довільний контент тут.</p>
        </main>
    )
}

export default Content
