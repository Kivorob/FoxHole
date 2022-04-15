import React from 'react';
import styles from "./headerinner.module.css"
import Logo from "../../img/Logo.png";

const HeaderInner = () => {
    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <div className={styles.headerinner}>
                    <div><a href="/"><img className={styles.logo} src={Logo} alt="Жалко, не грузится"/></a></div>
                </div>
                <div className={styles.searchline}>
                    <form action="" method="GET">
                        <input type="search" name="" placeholder="Найти на сайте"/>
                        <button type="submit">Поиск</button>
                    </form>
                </div>
                <div className={styles.headericons}>
                    <div> w </div>
                    <div> w </div>
                    <div> w </div>
                </div>

            </div>
        </div>

    );
};

export default HeaderInner;