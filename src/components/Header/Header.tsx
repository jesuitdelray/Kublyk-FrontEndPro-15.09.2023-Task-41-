import React from "react"
import styles from "./Header.module.scss"

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Заголовок</h1>
            </div>
        </div>
    )
}

export default Header
