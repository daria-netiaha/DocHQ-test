import React from 'react';
import styles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'

const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <a href="#" className={styles.menuToggler}>
                <MenuIcon fontSize="large" ></MenuIcon>
                Menu
            </a>
            <a href="#" className={styles.logo}>
                <Image src="/images/dochq-logo.svg" alt="me" width="170" height="46" />
            </a>
        </header>
    )
}

export default Header;