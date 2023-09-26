import React from "react"
import styles from "./Sidebar.module.scss"

function Sidebar() {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h2>Сайдбар</h2>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </div>
        </main>
    )
}

export default Sidebar
