import React, {useState} from 'react';
import Popup from 'reactjs-popup'; //npm install reactjs-popup --save
import 'reactjs-popup/dist/index.css';
import styles from "./headerinner.module.css"
import Logo from "../../img/Logo.png";
import user_icon from "../../img/user_img.jpg"
import {hover} from "@testing-library/user-event/dist/hover";
import {Button} from "react-scroll";

const contentStyle = {
    width: "600px",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "0 0 20px -6px #da821d",
    background: "#fdfbf7",
};
const overlayStyle = {};

const HeaderInner = () => {
    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <div className={styles.headerInner}>
                    <div><a href="/"><img className={styles.logo} src={Logo} alt="Жалко, не грузится"/></a></div>
                </div>
                <div className={styles.searchLine}>
                    <form action="" method="GET">
                        <input type="search" name="" placeholder="Найти на сайте" className={styles.search_input}/>
                        <button type="submit" className={styles.search_button}>Поиск</button>
                    </form>
                </div>
                {/*<div className={styles.headerIcons}>*/}
                {/*    <a href="#" className={styles.authBtn}>*/}
                {/*        <img src={auth} className={styles.authBtn__icon}/>*/}
                {/*        <span>Войти</span>*/}
                {/*    </a>*/}
                {/*</div>*/}
                <div className={styles.headerIcons}>
                    <div className={styles.basket}>
                        <div className={styles.basket_icon}>

                        </div>
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
            </div>
        </div>
    );
};

export default HeaderInner;