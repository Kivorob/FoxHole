import React from 'react';
import styles from "./navigationmenu.module.css"

const NavigationMenu = () => {
    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <div className={styles.navmenu}>
                    <a href="">Бренды</a>
                    <a href="">Фигурки</a>
                    <a href="">Настолки</a>
                    <a href="">Комиксы</a>
                    <a href="">Хиты продаж</a>
                    <a href="">Новинки</a>
                    <a href="">Акции</a>
                </div>
            </div>

        </div>
    );
};

export default NavigationMenu;