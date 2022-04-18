import React from 'react';
import styles from "./newssidebar.module.css"
import NastolCard from "../../img/NastolCard.jpg"
import SaleCard from "../../img/SaleCard.jpg"
import KomixCard from "../../img/KomixCard.jpg"

const NewsSideBar = () => {
    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <a href="/">
                    <div className={styles.card}>
                        <img src={NastolCard} alt="Тут должны быть настолки"/>
                        <p className={styles.title}>Настолки</p>
                        <br/>
                        <p className={styles.slogan}>Играйте в настольные игры с кайфом</p>
                    </div>
                </a>

                <a href="/">
                    <div className={styles.card}>
                        <img src={SaleCard} alt="Тут должны быть акции"/>
                        <p className={styles.title}>Акции</p>
                        <br/>
                        <p className={styles.slogan}>Получайте нашу продукцию выгодно</p>
                    </div>
                </a>

                <a href="/">
                    <div className={styles.card}>
                        <img src={KomixCard} alt="Тут должны быть комиксы"/>
                        <p className={styles.title}>Комиксы</p>
                        <br/>
                        <p className={styles.slogan}>Прочитай "Токийский Гуль 2" и покажи друзьям</p>
                    </div>
                </a>

            </div>

        </div>
    );
};

export default NewsSideBar;