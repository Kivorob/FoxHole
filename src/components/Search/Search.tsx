import React from 'react';
import styles from "../HeaderInner/headerinner.module.css";

const Search = () => {
    return (
        <div className={styles.searchLine}>
            <form action="" method="GET">
                <input type="search" name="" placeholder="Найти на сайте" className={styles.search_input}/>
                <button type="submit" className={styles.search_button}>Поиск</button>
            </form>
        </div>
    );
};

export default Search;