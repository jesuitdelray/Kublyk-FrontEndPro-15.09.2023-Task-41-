import React from "react"
import styles from "./Sidebar.module.scss"

function Sidebar() {
    return (
        <main className={styles.wrapper}>
            <h2>Центральний контент</h2>
            <p>Довільний контент тут.</p>
        </main>
    )
}

export default Sidebar
