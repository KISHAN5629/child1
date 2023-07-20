import React from "react";
import styles from '../styles/Home.module.css'

export const Header = ({children}) => {
    return (
        <nav className={styles.header}>
          {children}
        </nav>
      )
}

export default Header;