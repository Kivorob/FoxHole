import React, {useState} from 'react';
import Popup from 'reactjs-popup'; //npm install reactjs-popup --save
import 'reactjs-popup/dist/index.css';
import styles from "./headerinner.module.css"
import Logo from "../../img/Logo.png";
import auth from "../../img/user_img.jpg"
import {hover} from "@testing-library/user-event/dist/hover";
import {Button} from "react-scroll";

const contentStyle = {
    width: "600px",
    height: "400px"
};
const overlayStyle = {

};

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
                <Popup trigger={<div className={styles.headerIcons}><img src={auth} className={styles.authBtn__icon}/>
                    <button>Войти</button>
                </div>}
                       modal={true}
                       lockScroll={true}
                       nested={true}
                       contentStyle={contentStyle}>
                    <div className={styles.auth}>

                    </div>
                </Popup>
            </div>
        </div>

    );
};

export default HeaderInner;