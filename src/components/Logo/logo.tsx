import React from 'react';
import styles from "../HeaderInner/headerinner.module.css";
import LogoIcon from "../../img/Logo.png";

const Logo = () => {
    return (
        <div>
            <div className={styles.headerInner}>
                <a href="/">
                    <img className={styles.logo} src={LogoIcon} alt="Жалко, не грузится"/>
                </a>
            </div>
        </div>
    );
};

export default Logo;