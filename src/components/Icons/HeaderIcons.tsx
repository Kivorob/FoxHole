import React from 'react';
import styles from "../HeaderInner/headerinner.module.css";
import Popup from "reactjs-popup";
import user_icon from "../../img/user_img.jpg";

const HeaderIcons = () => {
    const contentStyle = {
        width: "600px",
        height: "400px",
        borderRadius: "10px",
        boxShadow: "0 0 20px -6px #da821d",
        background: "#fdfbf7",
    };
    return (
        <div className={styles.headerIcons}>
            <div className={styles.basket}>
                <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className={styles.basket_icon}>
                    <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5"
                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5"
                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <Popup trigger=
                       {<div className={styles.userIcon}>
                           <img src={user_icon} className={styles.authBtn__icon}/>
                           <button>Войти</button>
                       </div>}
                   modal={true}
                   lockScroll={true}
                   nested={true}
                   contentStyle={contentStyle}>
                <div className={styles.auth}>
                    <p className={styles.popup_title}>
                        Вход
                    </p>
                    <div className={styles.popup_block}>
                        <div className={styles.input_block}>
                            <input type="text" placeholder="Логин или номер телефона"
                                   className={styles.input__item}/>
                        </div>
                        <div className={styles.input_block}>
                            <input type="text" placeholder="Пароль" className={styles.input__item}/>
                        </div>
                        <div className={styles.regLink}>
                            <p>
                                Нет аккаунта?
                            </p>
                            <a href='#'>
                                Зарегистрироваться
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.loginBtn_block}>
                    <button className={styles.loginBtn}>
                        <a href="#">
                            Войти
                        </a>
                    </button>
                </div>
            </Popup>
        </div>
    );
};

export default HeaderIcons;