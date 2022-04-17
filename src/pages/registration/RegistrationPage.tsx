import React from 'react';
import styles from "./registration.module.css"

const RegistrationPage = () => {
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
                        <div className={styles.input_block}>
                            <div className={styles.input}>
                                <input type="text" placeholder="Логин" className={styles.input__item}/>
                            </div>
                            <div className={styles.input}>
                                <input type="tel" placeholder="Телефон" className={styles.input__item}/>
                            </div>
                            <div className={styles.input}>
                                <input type="password" placeholder="Пароль" className={styles.input__item}/>
                            </div>
                            <div className={styles.input}>
                                <input type="password" placeholder="Повторите пароль" className={styles.input__item}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.authBtn__block}>
                        <button className={styles.authBtn}>
                            <a href="/">
                                Зарегистрироваться
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;