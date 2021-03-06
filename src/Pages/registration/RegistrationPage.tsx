import React, {useState} from 'react';
import styles from "./registration.module.css"
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";



async function saveUser(data?: any) {
    return fetch('http://localhost:7010/api/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

function RegistrationPage({auth, user, setUser, setAuthorised}: {auth?: any, setAuthorised?: any, user?: any, setUser?: any}) {
    const  onSubmit = async  (event?: any) => {
        event.preventDefault();
        const data = {
            login: event.target.elements.login.value,
            telephone: event.target.elements.telephone.value,
            password: event.target.elements.password.value,
            secondPassword: event.target.elements.secondPassword.value

        }
        let token;
        token = await saveUser(data).catch(err => token = {token: 'error'});
        if (token.token !== 'error' && data.password === data.secondPassword) {
            localStorage.setItem('token', token.token);
            user = token.user
            setUser(user);
            auth = true;
            setAuthorised(auth);
        }
    }
    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <div className={styles.registration_wrap}>
                    <div className={styles.registration_block}>
                        <div className={styles.registration__title}>
                            <p>
                                Регистрация
                            </p>
                        </div>
                        <form onSubmit={onSubmit} className={styles.input_block}>
                            <div className={styles.input}>
                                <input id="login" type="text" placeholder="Логин" className={styles.input__item}/>
                            </div>
                            <div className={styles.input}>
                                <input id="telephone" type="tel" placeholder="Телефон" className={styles.input__item}/>
                            </div>
                            <div className={styles.input}>
                                <input id="password" type="password" placeholder="Пароль" className={styles.input__item}/>
                            </div>
                            <div className={styles.input}>
                                <input id="secondPassword" type="password" placeholder="Повторите пароль" className={styles.input__item}/>
                            </div>
                            <div className={styles.authBtn__block}>
                                <button type="submit" className={styles.authBtn}>
                                    Зарегистрироваться
                                </button>
                            </div>
                                <Link to={'/'}>На главную</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;