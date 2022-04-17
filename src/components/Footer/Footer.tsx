import React from 'react';
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__column}>
                    <div className={styles.footer__row}>
                        <div className={styles.footer__block}>
                            <div className={styles.footer__block_title}>
                                Помощь
                            </div>
                            <ul className={styles.footer__navList}>
                                <li className={styles.footer__navList_item}>
                                    <a href="#" className={styles.footer__item_link}>
                                        Доставка и оплата
                                    </a>
                                </li>
                                <li className={styles.footer__navList_item}>
                                    <a href="#" className={styles.footer__item_link}>
                                        Возврат и обмен заказа
                                    </a>
                                </li>
                                <li className={styles.footer__navList_item}>
                                    <a href="#" className={styles.footer__item_link}>
                                        Договор оферты
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__block}>
                            <div className={styles.footer__block_title}>
                                Лисья Нора
                            </div>
                            <ul className={styles.footer__navList}>
                                <li className={styles.footer__navList_item}>
                                    <a href="#" className={styles.footer__item_link}>
                                        О компании
                                    </a>
                                </li>
                                <li className={styles.footer__navList_item}>
                                    <a href="#" className={styles.footer__item_link}>
                                        Оптовым клиентам
                                    </a>
                                </li>
                                <li className={styles.footer__navList_item}>
                                    <a href="#" className={styles.footer__item_link}>
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__block}>
                            <div className={styles.footer__block_title}>
                                Блог
                            </div>
                            <ul className={styles.footer__navList}>
                                <li className={styles.footer__navList_item}>
                                    <a href="#" className={styles.footer__item_link}>
                                        Статьи
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={styles.footer__block}>
                    <div className={styles.footer__block_title}>
                        Наши соцсети
                    </div>
                    <div className={styles.footer__icons}>
                    </div>
                    <div className={styles.footer__connection}>
                        8 423 266-14-14
                    </div>

                    {/*<div className={styles.footer__info}></div>*/}
                </div>
            </div>

        </div>
    );
};

export default Footer;