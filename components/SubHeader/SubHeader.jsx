import React from 'react';
import styles from './SubHeader.module.css';

const SubHeader = () => {
    return (
        <ul className={styles.subHeader}>
            <li>
                <a href="#">COVID TEST</a>
            </li>
            <li>
                <a href="#">HEALTH APP</a>
            </li>
            <li>
                <a href="#">SUPPLEMENTS</a>
            </li>
        </ul>
    )
}

export default SubHeader;