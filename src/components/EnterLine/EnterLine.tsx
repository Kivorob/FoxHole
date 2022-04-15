import React from 'react';
import styles from "./enterline.module.css"


const EnterLine = () => {
    return (
            <div className={styles._bg}>
                <div className={styles.container}>
                    <div className={styles.enterline}>
                        <p><a href="">Доставка</a></p>
                        <p><a href="">Для оптовых клиентов</a></p>
                        <p><a href="">Бонусная программа</a></p>
                        <p><a href="">8 423 266-14-14</a></p>
                    </div>
                </div>
            </div>


    );
};

export default EnterLine;