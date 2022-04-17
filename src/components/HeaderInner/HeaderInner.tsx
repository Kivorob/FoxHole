import React, {useState} from 'react';
import 'reactjs-popup/dist/index.css';
import styles from "./headerinner.module.css"
import {hover} from "@testing-library/user-event/dist/hover";
import Search from "../Search/Search";
import HeaderIcons from "../Icons/HeaderIcons";
import Logo from "../Logo/logo";

const HeaderInner = () => {
    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <Logo/>
                <Search/>
                <HeaderIcons/>
            </div>
        </div>
    );
};

export default HeaderInner;