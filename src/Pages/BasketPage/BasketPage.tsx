import React from 'react';
import styles from "./basket.module.css"

const BasketPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.purchases}>
                <h1>Корзина</h1>
                <ul className={styles.purchases__itemTable}>
                    <li className={styles.purchases__item}>
                        <div className={styles.productImg}>
                            <img src="" alt=""/>
                        </div>
                        <div className={styles.product__desc}>
                            <div className={styles.product__info}>Тут находится описание товара</div>
                            <div className={styles.product__quantity}>
                                <button className={styles.quantity__decrement}>-</button>
                                <div className={styles.quantity__count}>1</div>
                                <button className={styles.quantity__increment}>+</button>
                            </div>
                            <div className={styles.product__price}>900 ₽</div>
                        </div>
                        <div className={styles.deleteProduct}></div>
                    </li>
                </ul>
            </div>
            <div className={styles.purchases__info}>
                <div className={styles.purchases__table}>

                    <div className={styles.checkout}>
                        <div className={styles.checkout__info}>
                            <tr>
                                <td className={styles.Summary__title}>В корзине:</td>
                                <td className={styles.Summary__val}>1 товар</td>
                            </tr>
                            <tr>
                                <td className={styles.Summary__title}>Сумма:</td>
                                <td className={styles.Summary__val}>900 ₽</td>
                            </tr>
                             <tr>
                                <td className={styles.discount__title}>Скидка:</td>
                                <td className={styles.discount__val}>100 ₽</td>
                            </tr>
                            <tr>
                                <td className={styles.total__title}>Итого:</td>
                                <td className={styles.total__val}>800 ₽</td>
                            </tr>
                        </div>
                        <button className={styles.checkout__btn}>
                            Оформить заказ
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BasketPage;