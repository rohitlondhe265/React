import React, { useState } from 'react'
import styles from "./navbar.module.css"

const Navbar = () => {
    const [menu, setmenu] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/vite.svg" alt="logo img" />
                <span>Vite React</span>
            </div>
            <div className={styles.links}>
                <span className={`${styles.menu} ${menu ? styles.open : styles.close}`} onClick={() => menu ? setmenu(false) : setmenu(true)}>
                    <div className={styles.line} id={styles.line1}></div>
                    <div className={styles.line} id={styles.line2}></div>
                    <div className={styles.line} id={styles.line3}></div>
                </span>
                <ul className={`${styles.menuLinks} ${menu ? styles.open : styles.close}`}>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Products</li>
                </ul>
                <span className={styles.btn}>Click</span>
            </div>
        </div>
    )
}

export default Navbar