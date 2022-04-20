import React from 'react';
import styles from "../HeaderInner/headerinner.module.css";
import Popup from "reactjs-popup";
import user_icon from "../../img/user_img.jpg";
import {NavLink} from "react-router-dom";

async function loginUser(data?: any) {
    return fetch('http://localhost:7010/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function HeaderIcons({auth, setAuthorised, user, setUser}: {auth?: any, setAuthorised?: any, user?: any, setUser?: any}) {
    const contentStyle = {
        width: "600px",
        height: "400px",
        borderRadius: "10px",
        boxShadow: "0 0 20px -6px #da821d",
        background: "#fdfbf7",
    };

    const handleSubmit = async (event?: any) => {
        event.preventDefault();
        console.log(event);
        const data = {
            login: event.target.elements.login.value,
            password: event.target.elements.password.value
        }
        let token;
        token = await loginUser(data).catch(err => token = {token: 'token'});
        if (token.token !== 'error') {
            console.log(token);
            auth = true;
            setAuthorised(auth);
            user = token.user;
            setUser(user);
            localStorage.setItem('token', token.token);
            console.log(localStorage.getItem("token"));
        }
    }

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
                <form onSubmit={handleSubmit} className={styles.auth}>
                    <p className={styles.popup_title}>
                        Вход
                    </p>
                    <div className={styles.popup_block}>
                        <div className={styles.input_block}>
                            <input id="login" type="text" placeholder="Логин или номер телефона"
                                   className={styles.input__item}/>
                        </div>
                        <div className={styles.input_block}>
                            <input id="password" type="text" placeholder="Пароль" className={styles.input__item}/>
                        </div>
                    </div>
                    <div className={styles.loginBtn_block}>
                        <button type="submit" className={styles.loginBtn}>
                            Войти
                        </button>
                    </div>
                </form>
                <div className={styles.regLink}>
                    <p>
                        Нет аккаунта?
                    </p>
                    <NavLink to={'/registration'}>Зарегистрироваться</NavLink>
                </div>
            </Popup>
        </div>
    );
}

export default HeaderIcons;