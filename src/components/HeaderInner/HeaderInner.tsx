import React, {useState} from 'react';
import styles from "./headerinner.module.css"
import Logo from "../../img/Logo.png";
import {hover} from "@testing-library/user-event/dist/hover";

const HeaderInner = () => {
    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <div className={styles.headerinner}>
                    <div><a href="/"><img className={styles.logo} src={Logo} alt="Жалко, не грузится"/></a></div>
                </div>
                <div className={styles.searchline}>
                    <form action="" method="GET">
                        <input type="search" name="" placeholder="Найти на сайте" className={styles.search_input}/>
                        <button type="submit" className={styles.search_button}>Поиск</button>
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